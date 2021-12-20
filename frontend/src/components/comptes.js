import '../style/style2.css';
import logo from './stg.jpg';
import { Link } from "react-router-dom";
import MyProfil from "./my_profil";
import Accueil from "./profil.js";
import React, { useState } from "react";
import styled from "styled-components";

const Comptes = (props) => {
    const Button = styled.button`
      background-color: blue;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 80px;
      margin: 10px 80px;
      cursor: pointer;
    `;
    const Button2 = styled.button`
      background-color: black;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 80px;
      margin: 10px 80px;
      cursor: pointer;
    `;
    const Button3 = styled.button`
      background-color: red;
      color: white;
      font-size: 20px;
      padding: 10px 60px;
      border-radius: 80px;
      margin: 10px 80px;
      cursor: pointer;
    `;
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [redirection, setRedirection] = useState(0);

    React.useEffect(() => {
        fetch("http://localhost:3200/api/authentification/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const redirectAccueil = () => {
        setRedirection(1);

    }
    const redirectionMonProfil = () => {
        setRedirection(2);
    }
    if (redirection === 1) {
        return <Accueil mail={props.mail} />;
    } else if (redirection === 2) {
        return (<MyProfil mail={props.mail} />);
    } else {

        return (
            <div>
                <div className="navProfil">
                    <img src={logo} alt='La maison jungle' className='lmj-logo2' />
                    <Button onClick={redirectAccueil}>
                        Accueil
         </Button>
                    <Button2 >
                        Utilisateurs
         </Button2>
                    <Button onClick={redirectionMonProfil}>
                        Mon profil
         </Button>
                    <Button3 >
                        <Link to="/deconnexion"> Deconnexion </Link>
                    </Button3>
                </div>
                <div>
                    <h1>Les comptes</h1>
                    <ul>
                        {items.map(item => (
                            <li key={item._id}>
                                <h2>Nom : {item.nom} -----
                                  Prenom : {item.postnom} ---
                                  Téléphone: {item.telephone} ---
                                  Adresse mail : {item.email}</h2>
                                <h2>-------------------------------------------------</h2>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Comptes;
