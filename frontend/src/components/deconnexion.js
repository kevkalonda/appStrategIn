import '../style/style.css';
import logo from './stg.jpg';
import { Link } from "react-router-dom";

import React from "react";

const Deconnexion = () => {


    return (
        <div>
            <form className="contact-form2">
                <img src={logo} alt='La maison jungle' className='lmj-logo' />

                <h2>Aurevoir :)</h2>

                <div className="form-content">
                    <h4>Au plaisir de vous revoir</h4>
                    <p> cliquez  <Link to="/">ici</Link>  pour vous reconnecter</p>
                </div>
            </form>


        </div>
    );
};



export default Deconnexion;
