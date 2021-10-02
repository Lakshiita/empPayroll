import React from "react";

const login1 = () =>{
    return(
        
    <div>
    <h1>Login form</h1>
        <form>
            <label>User id</label>
            <input type='text' />
            {"\n"}
            <label>Password</label>
            <input type="password"/>
            <input type = "submit" />
        </form>
    </div>
    );
}

export default login1;