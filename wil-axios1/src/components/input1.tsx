/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/08/2024 - 16:43:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import React from 'react';

const Input1 = (props:any) => {
    return (
        <div className='flex w-[25rem] border-[0.1rem] border-black  required   hover:border-[0.15rem]  h-[2.5rem] gap-[3rem] bg-white rounded-md ml-[5.5rem]'>
            <input placeholder={props.placeholder} className={props.className} ></input>
            {props.icon}
        </div>
    );
};

export default Input1;