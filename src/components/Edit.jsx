/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Edit = () => {

    // data from loader
    const user = useLoaderData();

    // update user
    const handleUpdate = async(event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const updateInfo = {name};

        // send update info to backend
        try{
            const res = await fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateInfo)
            });
            const data = await res.json();
            
            if(data.modifiedCount>0){
                alert('upadated chages');
            } else if (data.modifiedCount === 0) {
                alert('already updated')
            }
        } catch(err){
            console.log(err.message);
        }
    }


    return (
        <div>
            <h1>Update {user.name} - back to <Link to='/users'>all users</Link></h1> 
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={user.name}/>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Edit;