import '../style/style.css';
import logo from './stg.jpg';
import { Routes, Route, Link } from "react-router-dom";

import React, { useState } from "react";

const CompteInexiste = () => {


  return (
    <div>
    <form className="contact-form2">
      <img src={logo} alt='La maison jungle' className='lmj-logo' />

      <h2>Connexion échouée</h2>

      <div className="form-content">
        <h4>Nous ne reconnaissons pas votre mail ou votre mot de passe</h4>
        <p> cliquez  <Link to="/inscription">ici</Link>  pour vous inscrire</p>
      </div>
    </form>


    </div>
  );
};



export default CompteInexiste;
