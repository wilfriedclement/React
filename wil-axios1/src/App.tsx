/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 21/08/2024 - 19:58:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 21/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Connexion from './components/connexion';

function App() {
  return (
  
    <Router>
      <Routes>
      
      <Route path="/" element={<Connexion/>} />
      <Route path="/connexion" element={<Login/>} />
        
      </Routes>
    </Router>
  );
}

export default App;


