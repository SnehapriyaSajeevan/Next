import React, { useState } from 'react'

function index() {
   const [state,setState]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState(name+"gmail.com");
    const [password, setPassword]=useState("");
    function handleName (event) {
    console.log(event.target.value);
    setName(event.target.value);

  }
  function pass (event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  function Email (event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  
  }
  function handleSubmit() {
  if (password.length<=8) {
    alert("password must be atleast 8 charactrs");
    return;

  }}
  return (
    <>
  <h1>
    email={email}
    {password}
  
  </h1>

  {/* <input type='text' onChange={}/> */}
  <p>
    enter your username
   </p>
   <input type='text' onChange={handleName}/>
   <p>
    enter your password
   </p><input type='password' onChange={pass}/>
    <p>
    enter your email
   </p><input type='text' onChange={Email}/>
   <button onClick={handleSubmit}>Submit</button>
  
    
  </>

  )
}

export default index