import React, { useState } from "react";
import Welcome from "./Welcome";
import { CButton, CLabel, CTooltip } from "@coreui/react";
import { useHistory } from "react-router-dom";

const TestCode=()=>{

    let history = useHistory();

    const[name,setName] =useState(localStorage.getItem("NAME"));

    const goClick=()=>{
        history.push(`/menus/NewMenu`);
    }

    const deleteLocal=()=>{
        localStorage.clear();
    }


    return(
        <div>
            {name ?(
                <>
            
            <CLabel>{name.substring(0,15)}</CLabel>
            <CTooltip content={name} placement="top">
                <span>...</span>
            </CTooltip>
            <p>Name     -{localStorage.getItem("NAME")}</p>
            <p>Email    -{localStorage.getItem("EMAIL")}</p>
            <p>Birthday -{localStorage.getItem("BIRTHDAY")}</p>
            <p>JP_SKILL -{localStorage.getItem("JP_SKILL")}</p>
            <p>EG_SKILL -{localStorage.getItem("EG_SKILL")}</p>
            <Welcome name="Sara"/>
            <Welcome name="Nice"/>
            <Welcome name="Elite"/>
            </>
            ):(
                <CLabel>NO Name</CLabel>
            )}
            <br></br>

            <CButton className="btn btn-danger" onClick={deleteLocal}>
                Delete localStorage
            </CButton>
            &emsp;
            <CButton className="btn btn-success" onClick={goClick}>
                Go to NewMenu
            </CButton>
        </div>
    )
}

export default TestCode;