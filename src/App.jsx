import { Link } from "react-router-dom";

function App() {
  

  const handleSubmit = (event)=> {
    event.preventDefault();
    const name = event.target.name.value;
    const user = {name};
    console.log(user);
    

    const sendData = async() => {
      try{
        // catch with api
        const res = await fetch('http://localhost:5000/users', {
          // send to server side
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });

        // get response from server side
        const backRes = await res.json();
        if(backRes) {
          alert('user added')
          event.target.reset();
        }
        console.log(backRes);
      } catch(err){
        console.log(err.message);
      }
    }

    sendData();
  }

  return (
    <>
      <h1>Add an user or see all <Link to='/users'>Users</Link></h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="name"/>
        <input type="submit" value="Add" />
      </form>
    </>
  )
}

export default App
