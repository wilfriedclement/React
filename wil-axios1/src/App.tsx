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
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './index.css'
import Connexion from "./components/connexion";
import Login from "./components/login";


const App = () => {
return(
  <Router>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
);
}
console.log(App)
export default App;


