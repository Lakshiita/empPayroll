import React, { useState, Fragment } from "react";
import "../empTAB.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const App = () => {
  const emp= useSelector(state=>state.firestore.ordered.Attendence);
  const firestore=useFirestore();
  let knt=0;
  useFirestoreConnect([
    {
      collection:"Attendence",
    },
  ]);
  const [contacts, setContacts] = useState(emp);
  const [addFormData, setAddFormData] = useState({
    Date: "",
    Status: "",
    UserID:""
  });

  const [editFormData, setEditFormData] = useState({
    Date: "",
    Status: "",
    UserID:""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
        Date: addFormData.Date,
        Status: addFormData.Status,
        UserID: addFormData.UserID
    };
    firestore.collection("Attendence").add(newContact);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        Date: editFormData.Date,
        Status: editFormData.Status,
        UserID: editFormData.UserID
    };

    firestore.collection("Attendence").doc(editContactId).update(editedContact);
    //setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    let id=contact.id;
    let formValues;
    if(knt==0){
      formValues= {
        Date: editFormData.Date,
        Status: editFormData.Status,
        UserID: editFormData.UserID
      };
      knt=1;
    }
    else{
      formValues = {
        Date: editFormData.Date,
        Status: editFormData.Status,
        UserID: editFormData.UserID
      };
    }
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    //const newContacts = [...contacts];
    const docref=firestore.collection("Attendence").doc(contactId).delete();
   // const index = contacts.findIndex((contact) => contact.id === contactId);

    //newContacts.splice(index, 1);

    //setContacts(newContacts);
  };
  
  console.log(emp);
  
  if(!emp)
    return <h1>loading</h1>
    var empp=emp.filter(s=>{if(s.UserID==localStorage.getItem("Email")) return s;})
  return (
    <div className="container">
      <form className="form-box" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {empp.map((contact) => (
              <Fragment>
                 
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
     
    </div>
  );
};

export default App;