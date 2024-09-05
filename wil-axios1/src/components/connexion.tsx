/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/08/2024 - 19:11:15
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import Form from "./form";
import Corps from "./corps";
import Navigation from "./navigation";
const Connexion = () =>{ 
return (
    <div className='bg-[#C8AB7D] flex mx-auto my-5 rounded-md w-[50%] h-[35rem] '>
      <Navigation/>
      <Corps/>
      <Form/>
    </div>
    );
};
console.log(Connexion)
export default Connexion