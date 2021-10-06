import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./empTAB.css";
import data from "../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow"
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const App = () => {
  const emp= useSelector(state=>state.firestore.ordered.Emp_Details);
  const firestore=useFirestore();
  useFirestoreConnect([
    {
      collection:"Emp_Details",
    },
  ]);
  const [contacts, setContacts] = useState(emp);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Address: "",
    phoneNumber: "",
    Email: "",
    dob:"",
    Designation:"",
    UserID:""
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Address: "",
    phoneNumber: "",
    Email: "",
    dob:"",
    Designation:"",
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
      Name: addFormData.Name,
      Address: addFormData.Address,
      phoneNumber: addFormData.phoneNumber,
      Email: addFormData.Email,
      dob:addFormData.dob,
      UserID:addFormData.UserID,
      Designation:addFormData.Designation
    };
    firestore.collection("Emp_Details").add(newContact);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      Name: editContactId.Name,
      Address: editFormData.Address,
      phoneNumber: editFormData.phoneNumber,
      Email: editFormData.Email,
      dob:editFormData.dob,
      UserID:editFormData.UserID,
      Designation:editFormData.Designation
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Name: editContactId,
      Address: editFormData.Address,
      phoneNumber: editFormData.phoneNumber,
      Email: editFormData.Email,
      dob:editFormData.dob,
      UserID:editFormData.UserID,
      Designation:editFormData.Designation
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
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
              <th>UserID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Designation</th>
              <th>dob</th>
              <th>Actions</th>
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

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          name="userID"
          required="required"
          placeholder="Enter UserID..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="designation"
          required="required"
          placeholder="Enter Designation..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="dob"
          required="required"
          placeholder="Enter dob in MON DD,YYYY format..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;