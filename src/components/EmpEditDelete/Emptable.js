import React, { useState, Fragment } from "react";
import "./empTAB.css";
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
      Name: editFormData.Name,
      Address: editFormData.Address,
      phoneNumber: editFormData.phoneNumber,
      Email: editFormData.Email,
      dob:editFormData.dob,
      UserID:editFormData.UserID,
      Designation:editFormData.Designation
    };
    firestore.collection("Emp_Details").doc(editContactId).update(editedContact);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    let id=contact.id;
    const formValues = {
      Name: editFormData.Name,
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
    const docref=firestore.collection("Emp_Details").doc(contactId).delete();
  
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
              <th>DOB</th>
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

      <h2>Add a Emp</h2>
      <form onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          name="UserID"
          required="required"
          placeholder="Enter UserID..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Address"
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
          name="Email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Designation"
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
}
export default App;