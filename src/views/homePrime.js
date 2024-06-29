import { CInput } from "@coreui/react";
import React from "react";

const HomePrime=(props)=>{
    let {
        username,
        nameChange,
        age,
        saveClick,
        phone,
        phoneChange,
       } = props;
    return(
       <>
       <h1>This is HomePrime.</h1>
       <CInput type = "text" placeholder="Please fill Your Name" 
        onChange={nameChange} value={username}
       />
       
       <p>Name = {username}</p>
       <p>Age = {age}</p>
       <button className="btn btn-success"
       onClick={saveClick}>Save</button>
       <CInput type = "text" placeholder="Please fill Phone" 
        onChange={phoneChange} value={phone}
       />


       <p>Your Phone is.....</p>
       </>
       );
}

export default HomePrime;