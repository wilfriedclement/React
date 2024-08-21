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

import Corps from './components/corps';
import Form from './components/form';
import './index.css'
import React from 'react';

const App = () => {
  return (
    <div className='bg-[#C8AB7D] flex mx-auto my-5 rounded-md w-[50%] h-[35rem] '>
      <Corps/>
      <Form/>
    </div>
  );
};

export default App;

