import '../style/style.css';
import logo from './stg.jpg';
import {  Link } from "react-router-dom";

import React from "react";

const CompteExiste = () => {


  return (
    <div>
    <form className="contact-form2">
      <img src={logo} alt='La maison jungle' className='lmj-logo' />

      <h2>Echec d'inscription</h2>

      <div className="form-content">
        <h4>Il existe déjà un compte avec cette adresse Email</h4>
        <p> cliquez  <Link to="/">ici</Link>  pour vous connecter</p>
      </div>
    </form>


    </div>
  );
};



export default CompteExiste;
