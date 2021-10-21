import React, { useState, Fragment } from "react";
import "../empTAB.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow"
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const App = () => {
  const emp= useSelector(state=>state.firestore.ordered.Emp_Details);
  const firestore=useFirestore();
  let knt=0;
  useFirestoreConnect([
    {
      collection:"Emp_Details",
    },
  ]);
  const [contacts, setContacts] = useState(emp);
  const [addFormData, setAddFormData] = useState({
    UserID: "",
    Address: "",
    Designation: "",
    Email:"",
    Name:"",
    dob:"",
    phoneNumber:""
  });

  const [editFormData, setEditFormData] = useState({
    UserID: "",
    Address: "",
    Designation: "",
    Email:"",
    Name:"",
    dob:"",
    phoneNumber:""
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
        UserID: addFormData.UserID,
        Address: addFormData.Address,
        Designation: addFormData.Designation,
        Email: addFormData.Email,
        Name: addFormData.Name,
        dob: addFormData.dob,
        phoneNumber: addFormData.phoneNumber
    };
    const newDat ={
      UserID:addFormData.Email,
      password:"123",
      Role:"Employee"
    };
    firestore.collection("Emp_Details").add(newContact);
    firestore.collection("Credentials").add(newDat);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
        UserID: editFormData.UserID,
        Address: editFormData.Address,
        Designation: editFormData.Designation,
        Email: editFormData.Email,
        Name: editFormData.Name,
        dob: editFormData.dob,
        phoneNumber: editFormData.phoneNumber
    };

    //const newContacts = [...contacts];

    //const index = contacts.findIndex((contact) => contact.id === editContactId);

    //newContacts[index] = editedContact;
    firestore.collection("Emp_Details").doc(editContactId).update(editedContact);
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
        UserID: contact.UserID,
        Address: contact.Address,
        Designation: contact.Designation,
        Email: contact.Email,
        Name: contact.Name,
        dob: contact.dob,
        phoneNumber: contact.phoneNumber
      };
      knt=1;
    }
    else{
      formValues = {
          UserID: editFormData.UserID,
          Address: editFormData.Address,
          Designation: editFormData.Designation,
          Email: editFormData.Email,
          Name: editFormData.Name,
          dob: editFormData.dob,
          phoneNumber: editFormData.phoneNumber
      };
    }
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    //const newContacts = [...contacts];
    const docref=firestore.collection("Emp_Details").doc(contactId).delete();
   // const index = contacts.findIndex((contact) => contact.id === contactId);

    //newContacts.splice(index, 1);

    //setContacts(newContacts);
  };
  
  console.log(emp);
  
  if(!emp)
    return <h1>loading</h1>
  return (
    <div className="container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Address</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Name</th>
              <th>DOB</th>
              <th>PhoneNumber</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
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

      <h2>Add Employee</h2>
      <form className="form-editEmp" onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          name="UserID"
          required="required"
          placeholder="Enter UserID..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Address"
          required="required"
          placeholder="Enter Address"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Designation"
          required="required"
          placeholder="Enter Designation"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Email"
          required="required"
          placeholder="Enter Email"
          onChange={handleAddFormChange}
        /><br/>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter Name"
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="dob"
          required="required"
          placeholder="Enter DOB"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter Phone Number"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;