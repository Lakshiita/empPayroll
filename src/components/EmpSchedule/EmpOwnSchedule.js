import React, { useState, Fragment } from "react";
import "../empTAB.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow"
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { EmojiPeopleRounded } from "@mui/icons-material";
const App = () => {
  const emp= useSelector(state=>state.firestore.ordered.Schedule);
  const firestore=useFirestore();
  let knt=0;
  
  useFirestoreConnect([
    {
      collection:"Schedule",
    },
  ]);
  console.log(emp);
  const [contacts, setContacts] = useState(emp);
  const [addFormData, setAddFormData] = useState({
    sid: "",
    work_hrs: "",
    status: "",
    date: "",
    UserID:""
  });

  const [editFormData, setEditFormData] = useState({
    sid: "",
    work_hrs: "",
    status: "",
    date: "",
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
        sid: addFormData.sid,
        work_hrs: addFormData.work_hrs,
        status: addFormData.status,
        date: addFormData.date,
        UserID: addFormData.UserID
    };
    firestore.collection("Schedule").add(newContact);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        sid: editFormData.sid,
        work_hrs: editFormData.work_hrs,
        status: editFormData.status,
        date: editFormData.date,
        UserID: editFormData.UserID
    };

    //const newContacts = [...contacts];

    //const index = contacts.findIndex((contact) => contact.id === editContactId);

    //newContacts[index] = editedContact;
    firestore.collection("Schedule").doc(editContactId).update(editedContact);
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
        sid: contact.sid,
        work_hrs: contact.work_hrs,
        status: contact.status,
        date: contact.date,
        UserID: contact.UserID
      };
      knt=1;
    }
    else{
      formValues= {
          sid: editFormData.sid,
          work_hrs: editFormData.work_hrs,
          status: editFormData.status,
          date: editFormData.date,
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
    const docref=firestore.collection("Schedule").doc(contactId).delete();
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
              <th>SID</th>
              <th>Work Hours</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {empp.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      
    </div>
  );
};

export default App;