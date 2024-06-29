import React, {useState} from "react";
import HomePrime from "./homePrime";

const Home=()=>{

    const[username,setUsername] = useState("");
    const[phone,setPhone] = useState("");

    const nameChange = (e) =>{
        setUsername(e.target.value);
    }

    const phoneChange = (e) =>{
        setPhone(e.target.value);
    }

    const saveClick = () =>{
        alert("save clicked");
    }

    return(
        <>
        
        <h1>This is Homex.</h1>
        <HomePrime 
        username = {username}
        nameChange = {nameChange} 
        age = "11"
        saveClick = {saveClick}
        phone = {phone}
        phoneChange = {phoneChange}
        />
        </>
        );
}

export default Home;