import React from "react";
import Data from "./schedule.json";

const Schedule = () =>{
    return(
        
    <div>
     
    
     <table>
        <thead>
            <th>Name</th>
            <th>Designation</th>
            <th>date</th>
            <th>status</th>
        </thead>
    <tbody>
        { Data.map(post =>{
            
            return (
                
                    <tr key={post.id}>
                        <td>{post.name}</td>
                        <td>{post.designation}</td>
                        <td>{post.date}</td>
                        <td>{post.status}</td>
                    </tr>
                    
            )
        })}
        </tbody>
        </table>
    </div>
    );
}

export default Schedule;