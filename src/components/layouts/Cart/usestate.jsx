import React, { useState } from 'react';

function Userslist(){
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', designation: 'Software Engineer', salary: 50000, age: 30 },
        { id: 2, name: 'Jane Smith', designation: 'Project Manager', salary: 75000, age: 40 },
        { id: 3, name: 'Mike Johnson', designation: 'Designer', salary: 45000, age: 28 },
      ]);
    const addUser = () => {
    const newUser = { id: 4, name: 'Emily Davis', designation: 'Developer', salary: 60000, age: 35 };
    setUsers([...users, newUser]); // Use destructuring to add the new user
      };     
return(
    <div>
        <h1>UserLists</h1>
        <ul>
       {
        users.map(({id,name,designation,salary,age})=>(
            <li key={id} style={{listStyleType:"none", fontWeight:"bold",paddingBottom:"20px"}}>
            <p>Name: {name}</p>
            <p>Designation: {designation}</p>
            <p>Salary: ${salary}</p>
            <p>Age: {age}</p>
          </li>
        ) )}
        </ul>
        <button onClick={addUser}>Add User</button>
    </div>      
)
}
export default Userslist;