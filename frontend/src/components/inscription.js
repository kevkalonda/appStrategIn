import '../style/style.css';
import logo from './stg.jpg';
import { Link } from "react-router-dom";
import Profil from './profil.js';
import CompteExiste from './compteExiste.js';

import React from "react";

const Inscription = (props) => {

    const [name, setName] = React.useState("");
    const [postname, setPostname] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mdp1, setMdp1] = React.useState("");
    const [mdp2, setMdp2] = React.useState("");
    const [estInscrit, setEstInscrit] = React.useState(0);

    React.useEffect(() => {

    }, [])

    const apiGet = (data) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //console.log(data);
        fetch("http://localhost:3200/api/authentification/register", options)
            .then((response) => response.json())
            .then((json) => {
                if (json.message === "Utilisateur cree") {
                    setEstInscrit(1);
                }
                else {
                    console.log(json)
                    setEstInscrit(2);
                }
            });
    }

    const handleSubmit = () => {
        if (mdp1 === mdp2 && mdp1.length > 3) {
            const data = {
                nom: name,
                prenom: postname,
                phone: phone,
                mail: email,
                mdp: mdp1,
            }
            apiGet(data);
        }
        else if (mdp1 !== mdp2) {
            alert("Les deux mot de passe ne sont pas identique");
        } else {
            alert("Le mot de passe doit avoir au minimum 4 caractere")
        }
    }
    if (estInscrit === 1) {
        return <Profil mail={email} />
    } else if (estInscrit === 2) {
        return <CompteExiste />
    } else {
        return (
            <div>
                <form className="contact-form">
                    <img src={logo} alt='La maison jungle' className='lmj-logo' />
                    <p> Déjà inscrit ? cliquez <Link to="/"> ici </Link>  </p>
                    <h2>S'inscrire</h2>
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
                        <input
                            type="password"
                            id="mdp1"
                            name="mdp1"
                            onChange={(e) => setMdp1(e.target.value)}
                            placeholder="Mot de passe"
                            value={mdp1}
                        />
                        <input
                            type="password"
                            id="mdp2"
                            name="mdp2"
                            onChange={(e) => setMdp2(e.target.value)}
                            placeholder="Confirmation mot de passe"
                            value={mdp2}
                        />
                    </div>

                    <input
                        className="button"
                        type="button"
                        value="Inscription"
                        onClick={handleSubmit}
                    />

                    <div className="form-message"></div>
                </form>

            </div>
        );
    }
};



export default Inscription;
