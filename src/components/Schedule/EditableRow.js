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
          placeholder="Enter a User ID..."
          name="UserID"
          value={editFormData.UserID}
          onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a sid.."
          name="sid"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Working hour..."
          name="work_hr"
          value={editFormData.Address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter status..."
          name="status"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter date..."
          name="date"
          value={editFormData.dob}
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