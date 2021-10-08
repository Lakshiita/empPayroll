import React, { useState, Fragment } from "react";
import "../empTAB.css";
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow"
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const App = () => {
  const emp= useSelector(state=>state.firestore.ordered.Salary);
  const firestore=useFirestore();
  useFirestoreConnect([
    {
      collection:"Salary",
    },
  ]);
  const [contacts, setContacts] = useState(emp);
  const [addFormData, setAddFormData] = useState({
    Designation:"",
    salary:""
  });

  const [editFormData, setEditFormData] = useState({
    Designation:"",
    salary:""
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
      Designation:addFormData.Designation,
      salary:addFormData.salary
    };
    firestore.collection("Salary").add(newContact);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      Designation:editFormData.Designation,
      salary:editFormData.salary
    };

    firestore.collection("Salary").doc(editContactId).update(editedContact);

    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    let id=contact.id;
    const formValues = {
      
      Designation:editFormData.Designation,
      salary:editFormData.salary,
    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {

    const docref=firestore.collection("Salary").doc(contactId).delete();

  };
  
  console.log(emp);
  
  if(!emp)
    return <h3>loading..</h3>
  return (
    <div className="container">
      <form className="form-box" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Designation</th>
              <th>Salary</th>
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
      <form className="form-editEmp" onSubmit={handleAddFormSubmit}>
      <input
          type="text"
          name="Designation"
          required="required"
          placeholder="Enter Designation..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="salary"
          required="required"
          placeholder="Enter Salary..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;