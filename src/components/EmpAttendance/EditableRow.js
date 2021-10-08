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
          placeholder="Enter date..."
          name="Date"
          value={editFormData.Designation}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter status..."
          name="Status"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter id..."
          name="UserID"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
    </tr>
  );
};

export default EditableRow;