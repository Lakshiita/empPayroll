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
          type="date"
          required="required"
          placeholder="Enter From Date"
          name="from"
          value={editFormData.from}
          onChange={handleEditFormChange}
        ></input>
      </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Duration"
          name="duration"
          value={editFormData.duration}
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