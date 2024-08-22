/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/08/2024 - 15:31:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import React from 'react';

const Button = (props: any) => {
    return (
        <div className='w-[25rem] h-[2.5rem] bg-[#3C4328] text-white  rounded-md justify-center items-center mx-auto mt-[1rem] ' >
            <button type={props.type} className={props.className}>{props.text}</button>
        </div>
    );
};

export default Button;