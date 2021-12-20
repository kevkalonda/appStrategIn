import Connexion from './components/connexion.js';
import Deconnexion from './components/deconnexion.js';
import Inscription from './components/inscription.js';
import Profil from './components/profil.js';
import Myprofil from './components/my_profil.js';
import Comptes from './components/comptes.js';
import { Routes, Route } from "react-router-dom";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Connexion />} />
            <Route path="/monProfil" element={<Myprofil />} />
            <Route path="/allcomptes" element={<Comptes />} />
            <Route path="/deconnexion" element={<Deconnexion />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="profil" element={<Profil />} />
        </Routes>
    )
}

export default App;
