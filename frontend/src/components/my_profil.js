import '../style/style.css';
import logo from './img.jpg';
import logo2 from './crs.png';
import { Routes, Route, Link } from "react-router-dom";
import Profil from './profil.js';
import Deconnexion from "./deconnexion.js";
import CompteInexiste from './CompteInexistant.js';
import React, { useState } from "react";
import styled from "styled-components";

const My_profil = (props) => {
  const [name, setName] = React.useState("");
  const [postname, setPostname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState(props.mail);
  const [mdp1, setMdp1] = React.useState("");
  const [mdp2, setMdp2] = React.useState("");
  const [declencheur, setDeclencheur] = React.useState(false);
  const [estInscrit, setEstInscrit] = React.useState(0);

  const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 80px;
    margin: 50px 400px;
    cursor: pointer;
  `;
  const Button2 = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 80px;
    margin: 10px 100px;
    cursor: pointer;
  `;
  const Button3 = styled.button`
    background-color: white;
    color: white;
    font-size: 20px;
    border-radius: 80px;
    cursor: pointer;
  `;


  React.useEffect(() => {
    console.log(props.mail);
    const options = {
      method: 'POST',
      body: JSON.stringify({email: email}),
      headers: {
          'Content-Type': 'application/json'
        }
    }
    fetch("http://localhost:3200/api/authentification/my_compt",options)
     .then((response) => response.json())
     .then((json) => {
       if(json.email===props.mail){
         console.log(json);
         setName(json.nom);
         setPostname(json.postnom);
         setPhone(json.telephone);
         setEmail(json.email);
       }
       else{
         console.log("erreur");
         //setEstConnecter(2);
       }
     });
  }, []);

  const [redirection, setRedirection] = useState(0);

  const deleteProfil=()=>{
    const options = {
      method: 'DELETE',
      body: JSON.stringify({email: email}),
      headers: {
          'Content-Type': 'application/json'
        }
    }
    fetch("http://localhost:3200/api/authentification/suppressionCompte",options)
     .then((response) => response.json())
     .then((json) => {
       if(json.message==="ok"){
         alert("votre compte a été supprimer");
         setRedirection(3);
       }
       else{
         console.log("erreur");
         //setEstConnecter(2);
       }
     });
  }

  const redirectionAccueil =()=>{
    setRedirection(1);
  }
  const sayHello =()=>{
    const options = {
      method: 'DELETE',
      body: JSON.stringify({email: email}),
      headers: {
          'Content-Type': 'application/json'
        }
    }
    fetch("http://localhost:3200/api/authentification/update",options)
     .then((response) => response.json())
     .then((json) => {
       if(json.message==="ok"){
         alert("votre compte a été modifier");
       }
       else{
         console.log("erreur");
       }
     });
  }

  if(redirection===1){
    return <Profil mail={props.mail} />
  }else if(redirection===3){
    return <Deconnexion />
  }
  else{
    return (
      <div>
      <form className="contact-form2">
        <div>
         <Button3 onClick={redirectionAccueil}>
         <img src={logo2} alt='La maison jungle' className='lmj-logo4' />
         </Button3>
        </div>
        <img src={logo} alt='La maison jungle' className='lmj-logo3' />

        <h2>{name}  {postname}</h2>

        <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="postname"
          name="postname"
          onChange={(e) => setPostname(e.target.value)}
          placeholder="prenom"
          value={postname}
          autoComplete="off"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse mail"
            value={email}
            autoComplete="off"
          />
        </div>
      </div>
      </form>
      </div>
    );
  }

}
export default My_profil;
