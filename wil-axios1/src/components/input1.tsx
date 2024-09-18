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

const Input1 = (props:any) => {
    return (
        <div className='flex w-[25rem] border-[0.1rem] border-black items-center justify-center ml-[12.5rem] required   hover:border-[0.15rem]  h-[2.5rem] gap-[3rem] bg-white rounded-md '>
            <input placeholder={props.placeholder} className={props.className} type="password" ></input>
            {props.icon}
        </div>
    );
};

export default Input1;