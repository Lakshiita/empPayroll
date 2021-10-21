import React, { useState, Fragment } from "react";
import "../empTAB.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow"
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const App = () => {
  const emp= useSelector(state=>state.firestore.ordered.Leaves);
  const firestore=useFirestore();
  let knt=0;
  useFirestoreConnect([
    {
      collection:"Leaves",
    },
  ]);
  const [contacts, setContacts] = useState(emp);
  const [addFormData, setAddFormData] = useState({
    duration: "",
    from: "",
    status: "",
    UserID:""
  });

  const [editFormData, setEditFormData] = useState({
    duration: "",
    from: "",
    status: "",
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
        duration: addFormData.duration,
        from: addFormData.from,
        status: "pending",
        UserID: localStorage.getItem("Email")
    };
    firestore.collection("Leaves").add(newContact);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        duration: editFormData.duration,
        from: editFormData.from,
        status: editFormData.status,
        UserID: editFormData.UserID
    };

    //const newContacts = [...contacts];

    //const index = contacts.findIndex((contact) => contact.id === editContactId);

    //newContacts[index] = editedContact;
    firestore.collection("Leaves").doc(editContactId).update(editedContact);
    //setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    let id=contact.id;
    let formValues;
    const docref=firestore.collection("Leaves").doc(id).update({"status":"APPROVED"});
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    //const newContacts = [...contacts];
    const docref=firestore.collection("Leaves").doc(contactId).update({"status":"REJECTED"});
  };
  
  console.log(emp);
  
  if(!emp)
    return <h1>loading</h1>
    var empp=emp.filter(s=>{if(s.UserID===localStorage.getItem("Email")) return s;})
  return (
    <div className="container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              
              <th>Duration</th>
              <th>Status</th>
              <th>From</th>
            </tr>
          </thead>
          <tbody>
            {empp.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
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

      <h2>Schedule a Leave</h2>
      <form className="form-editEmp" onSubmit={handleAddFormSubmit}>
      <input
          type="date"
          name="from"
          required="required"
          placeholder="Enter from date"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="duration"
          required="required"
          placeholder="Enter duration"
          onChange={handleAddFormChange}
        />
        
        
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;