import React, {useState} from "react";
import { CButton,CCol,CRow,CLabel,CInput, CSelect } from "@coreui/react";


const NewMenu=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [birthday,setBithday] = useState("");
    const [jpSkill,setJpSkill] = useState("");
    const [egSkill,setEgDill] = useState("");

    const nameChange = (e) => {
        setName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const phoneChange = (e) => {
        setPhone(e.target.value);
    }
    const birthdayChange = (e) => {
        setBithday(e.target.value);
    }
    const jpSkillChange = (e) => {
        setJpSkill(e.target.value);
    }
    const egSkillChange = (e) => {
        setEgDill(e.target.value);
    }

    console.log("name",name);
    console.log("email",email);
    console.log("phone",phone);
    console.log("birthday",birthday);
    console.log("jpSkill",jpSkill);
    console.log("egSkill",egSkill);
    

    const [japanSkill,setJapanSkill] = useState([
        {id: 'N1', level: 'N1'},
        {id: 'N2', level: 'N2'},
        {id: 'N3', level: 'N3'},
        {id: 'N4', level: 'N4'},
        {id: 'N5', level: 'N5'},
        {id: 'N6', level: 'N6'},
    ]);

    const [englishSkill,setEnglishSkill] = useState([
        {id: 'Beginner', level: 'Beginner'},
        {id: 'Intermediate', level: 'Intermediate'},
        {id: 'Advanced', level: 'Advanced'},
        {id: 'Fluent', level: 'Fluent'},
        {id: 'Native', level: 'Native'},
        {id: 'Proficiency', level: 'Proficiency'},
    ]);

    const handleReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setBithday("");
        setJpSkill("");
        setEgDill("");
      };

      const sendClick = () => {
        localStorage.setItem("NAME",name);
        localStorage.setItem("EMAIL",email);
        localStorage.setItem("PHONE",phone);
        localStorage.setItem("BIRTHDAY",birthday);
        localStorage.setItem("JP_SKILL",jpSkill);
        localStorage.setItem("EG_SKILL",egSkill);
    };

    return(
        <>
        <h1 className="mt-3" align="center">Register Rorm </h1>
        <br></br>

        <CRow>
            <CCol lg="6">

                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="4"><CLabel>Name</CLabel></CCol>
                    <CCol lg="6"><CInput type="text" value={name} onChange={nameChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            <br></br>
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="4"><CLabel>Phone Number</CLabel></CCol>
                    <CCol lg="6"><CInput type="text" value={phone} onChange={phoneChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            <br></br>
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="4"><CLabel>Japanese skill</CLabel></CCol>
                    <CCol lg="6">
                        <CSelect value={jpSkill} onChange={jpSkillChange}>
                            <option value="">-- Select --</option>
                            {
                                japanSkill.map((data,index)=>{
                                    return(
                                        <option key={data.id} value={data.level}>{data.level}</option>
                                    )
                                })
                            }
                        </CSelect>
                    </CCol>
                    <CCol lg="1"></CCol>
                </CRow>
            </CCol>
            <CCol lg="6">

                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="4"><CLabel>Email</CLabel></CCol>
                    <CCol lg="6"><CInput type="email" value={email} onChange={emailChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
                <br></br>
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="4"><CLabel>Birthday</CLabel></CCol>
                    <CCol lg="6"><CInput type="date" value={birthday} onChange={birthdayChange}/></CCol>
                    <CCol lg="1"></CCol>
                </CRow>
                <br></br>
                <CRow>
                    <CCol lg="1"></CCol>
                    <CCol lg="4"><CLabel>English skill</CLabel></CCol>
                    <CCol lg="6">
                        <CSelect value={egSkill} onChange={egSkillChange}>
                            <option value="">-- Select --</option>
                            {
                                englishSkill.map((item,index)=>{
                                    return(
                                        <option key={item.id} value={item.level}>{item.level}</option>
                                    )
                                })
                            }
                        </CSelect>
                    </CCol>
                    <CCol lg="1"></CCol>
                </CRow>

            </CCol>
        </CRow>
        <CRow>
        <CCol lg="12" className="text-center">
          <CButton onClick={handleReset} className="mt-4 btn btn-outline-danger">
            Reset
          </CButton> &emsp;
          <CButton className="mt-4 btn btn-outline-success" onClick={sendClick}>Send</CButton>
        </CCol>
        </CRow>
        </>
        );
};

export default NewMenu;

