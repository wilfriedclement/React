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

import { Switch } from "react-router-dom";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Connexion from "./components/connexion";
const App = () => {
return(
  
    <BrowserRouter>
    <Switch>
      <Route path="/src/components/connexion.tsx" element={"<Connexion/>"}/>
    </Switch>
    </BrowserRouter>
);
}
console.log(App)
export default App;


