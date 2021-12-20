import Connexion from './components/connexion.js';
import Deconnexion from './components/deconnexion.js';
import Inscription from './components/inscription.js';
import Profil from './components/profil.js';
import My_profil from './components/my_profil.js';
import Comptes from './components/comptes.js';
import { Routes, Route, Link } from "react-router-dom";
//https://reactrouter.com/docs/en/v6/getting-started/installation

function App() {

    return (
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/monProfil" element={<My_profil />} />
        <Route path="/allcomptes" element={<Comptes />} />
        <Route path="/deconnexion" element={<Deconnexion />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="profil" element={<Profil />} />
      </Routes>
      )
}

export default App;
