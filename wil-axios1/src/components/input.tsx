/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/08/2024 - 12:27:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import React from 'react';



const Input = (props:any) => {
  return (
    <div className='justify-between items-center mx-auto  rounded-md w-[25rem] h-[2.5rem] border-black border-[0.1rem]'>
      <input placeholder={props.placeholder} className={props.className}></input>
    </div>
  )
}

export default Input
