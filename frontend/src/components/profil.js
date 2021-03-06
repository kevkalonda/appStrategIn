import '../style/style2.css';
import logo from './stg.jpg';
import { Link } from "react-router-dom";
import MyProfil from "./my_profil";
import Comptes from "./comptes.js";
import React, { useState } from "react";
import styled from "styled-components";

const Profil = (props) => {
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
    const [redirection, setRedirection] = useState(0);
    const redirectUtilisateurs = () => {
        setRedirection(1);

    }
    const redirectionMonProfil = () => {
        setRedirection(2);

    }

    if (redirection === 1) {
        return (<Comptes mail={props.mail} />);
    } else if (redirection === 2) {
        return (<MyProfil mail={props.mail} />);
    } else {
            return (
                <div >
                    <div className="navProfil">
                        <img src={logo} alt='La maison jungle' className='lmj-logo2' />
                        <Button2 >
                            Accueil
                        </Button2>
                        <Button onClick={redirectUtilisateurs}>
                            Utilisateurs
                        </Button>
                        <Button onClick={redirectionMonProfil}>
                            Mon profil
                        </Button>
                        <Button3 >
                            <Link to="/deconnexion"> Deconnexion </Link>
                        </Button3>
                    </div>
                    <div>
                        <h1>Lorem Ipsum</h1>
                        <h2>Qu'est-ce que le Lorem Ipsum?</h2>
                        <p>
                            Le Lorem Ipsum est simplement du faux texte employ?? dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les ann??es 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour r??aliser un livre sp??cimen de polices de texte. Il n'a pas fait que survivre cinq si??cles, mais s'est aussi adapt?? ?? la bureautique informatique, sans que son contenu n'en soit modifi??. Il a ??t?? popularis?? dans les ann??es 1960 gr??ce ?? la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus r??cemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                        </p>
                        <h2>D'o?? vient-il?</h2>
                        <p>
                            Contrairement ?? une opinion r??pandue, le Lorem Ipsum n'est pas simplement du texte al??atoire. Il trouve ses racines dans une oeuvre de la litt??rature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est int??ress?? ?? un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en ??tudiant tous les usages de ce mot dans la litt??rature classique, d??couvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Supr??mes Biens et des Supr??mes Maux) de Cic??ron. Cet ouvrage, tr??s populaire pendant la Renaissance, est un trait?? sur la th??orie de l'??thique. Les premi??res lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.
                            L'extrait standard de Lorem Ipsum utilis?? depuis le XVI?? si??cle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cic??ron sont aussi reproduites dans leur version originale, accompagn??e de la traduction anglaise de H. Rackham (1914).
                        </p>
                        <h2>Pourquoi l'utiliser?</h2>
                        <p>
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et emp??che de se concentrer sur la mise en page elle-m??me. L'avantage du Lorem Ipsum sur un texte g??n??rique comme 'Du texte. Du texte. Du texte.' est qu'il poss??de une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du fran??ais standard. De nombreuses suites logicielles de mise en page ou ??diteurs de sites Web ont fait du Lorem Ipsum leur faux texte par d??faut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'?? leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
                        </p>
                        <h2>O?? puis-je m'en procurer?</h2>
                        <p>
                            Plusieurs variations de Lorem Ipsum peuvent ??tre trouv??es ici ou l??, mais la majeure partie d'entre elles a ??t?? alt??r??e par l'addition d'humour ou de mots al??atoires qui ne ressemblent pas une seconde ?? du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez ??tre s??r qu'il n'y a rien d'embarrassant cach?? dans le texte. Tous les g??n??rateurs de Lorem Ipsum sur Internet tendent ?? reproduire le m??me extrait sans fin, ce qui fait de lipsum.com le seul vrai g??n??rateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour g??n??rer un Lorem Ipsum irr??prochable. Le Lorem Ipsum ainsi obtenu ne contient aucune r??p??tition, ni ne contient des mots farfelus, ou des touches d'humour.
                        </p>
                    </div>
                </div>
            );
           }
}
export default Profil;
