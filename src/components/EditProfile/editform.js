import React from "react";
// import "./profile.css";

const form = ({EditFormData,handleEditFormChange,handleEditFormSubmit}) =>{
    
    return(
        <div class="form">
        <form >
        <table>
        <tr>
            <td><input type="text" placeholder="UserId" disabled value={EditFormData.UserID} name="UserID"
               
            /></td>
        </tr>
        <tr>
            <td><input type="text" placeholder="Name" value={EditFormData.Name} name="Name"
               onChange={handleEditFormChange}
            /></td>
         </tr>   
            <tr>
            <td><input type="text" placeholder="Designation" disabled value={EditFormData.Designation} name="Designation"
                
            /></td>
            </tr>
            <tr>
            <td><input type="text" placeholder="Email" value={EditFormData.Email} name="Email"
                 onChange={handleEditFormChange}
            /></td>
            </tr>
            <tr>
            <td><input type="text" placeholder="Address" value={EditFormData.Address} name="Address"
                  onChange={handleEditFormChange}
            /></td>
            </tr>
            <tr>
            <td><input type="date" placeholder="Date of Birth" disabled value={EditFormData.dob} name="dob"/></td>
            </tr>
            <tr>
            <td><input type="phone" placeholder="PhoneNumber" value={EditFormData.phoneNumber} name="phoneNumber"
                 onChange={handleEditFormChange}
            /></td>
            </tr>
            <tr>
            <td><input type="button" value="Edit"  /></td>
            </tr>
            </table>
        </form>
        </div>
    );
}

export default form;