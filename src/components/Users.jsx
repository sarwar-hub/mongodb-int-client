/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = async(id) => {
        try{
            // response to server side by fetching with dynamic id
            const res = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            });
            const backRes = await res.json();

            if(backRes.deletedCount > 0) {
                const finalUsers = users.filter(user=> user._id !== id);
                setUsers(finalUsers);
                alert('deleted from database');
            }
            
        }catch(err){
            console.log(err.message);
        }
      
        
    }

    return (
        <div>
            <h1>All Users - back to <Link to='/'>add</Link></h1> 
            {
                users.map(user=><li key={user._id}>{user.name} <Link to={`/edit/${user._id}`}><button style={{color: "blue"}}>Edit</button></Link> <button onClick={()=>handleDelete(user._id)} style={{color: "red"}}>X</button> </li>)
            }
        </div>
    );
};

export default Users;