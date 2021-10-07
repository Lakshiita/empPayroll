import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <input
          type="text"
          required="required"
          placeholder=""
          name="UserID"
          value={editFormData.UserID}
          onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Address"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Designation"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Email"
          value={editFormData.Address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="Name"
          value={editFormData.Address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="dob"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder=""
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;