import '../style/style.css';
import logo from './stg.jpg';
import { Routes, Route, Link } from "react-router-dom";
import Profil from './profil.js';
import CompteInexiste from './CompteInexistant.js';
import React, { useState } from "react";

const Connexion = () => {
  const [email, setEmail] = React.useState("");
  const [mdp1, setMdp1] = React.useState("");
  const [estConnecter, setEstConnecter] = React.useState(0);
  const [headers, setHeaders] = React.useState();
  React.useEffect(() => {

  }, []);

  const apiGet=(data)=>{
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
        }
    }
    fetch("http://localhost:3200/api/authentification/connexion",options)
     .then((response) => response.json())
     .then((json) => {
       if(json.message==="ok"){
         setHeaders(json);
         //console.log(json);
         setEstConnecter(1);
       }
       else{
         console.log(json);
         setEstConnecter(2);
       }
     });
  }

  const handleSubmit =()=>{
    if(email.length > 0  && mdp1.length > 0){
      const data ={
        mail : email,
        mdp :mdp1,
      }
      //console.log(email);
      apiGet(data);
    }
    else{
      alert("Les deux champs sont obligatoires")
    }
  }

  if(estConnecter===1){
    return <Profil mail={email}/>
  }else if (estConnecter===2) {
    return <CompteInexiste />
  }else{
    return (
      <div>
      <form className="contact-form2">
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <p>Bienvenu</p>
        <h2>Se connecter</h2>

        <div className="form-content">
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Identifiant"
            value={email}
            //autoComplete="off"
          />
          <input
            type="password"
            id="mdp"
            name="mdp"
            onChange={(e) => setMdp1(e.target.value)}
            placeholder="Mot de passe"
            value={mdp1}
          />
        </div>

        <input
          className="button"
          type="button"
          value="Connexion"
          onClick={handleSubmit}
        />
        <p> Vous n'etes pas inscrit? cliquez  <Link to="/inscription"> ici </Link>  </p>
      </form>


      </div>
    );
  }

};



export default Connexion;
