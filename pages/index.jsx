import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React ,{useState} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [state,setState]=useState(0);
  const [name,setName]=useState("");
  const [email,setEmail]=useState(name+"gmail.com");
  console.log("state",state);
  console.log("Name",name);
  console.log("email",email);
  const [password, setPassword]=useState("");
  console.log("password",password);
  
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

  }
console.log("login successful");

  }
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

  );
}
