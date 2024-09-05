/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 05/09/2024 - 12:55:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
        <NavLink to ="/connexion">login</NavLink>
        <NavLink to ="/login">connexion</NavLink>
        </div>
    );
};

export default Navigation;