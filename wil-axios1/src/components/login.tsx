/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 22/08/2024 - 18:59:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/08/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { useNavigate } from 'react-router-dom';
import Corps from './corps';
import Input from './input';
import Input1 from './input1';
import Button from './button';
import { GoEyeClosed } from "react-icons/go";
import { GiSemiClosedEye } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import  { useState } from 'react';
const Login = () => {
    const [click,setclick] = useState(false)
    const handleClick =()=>{
    setclick(!click);
};
const navigate = useNavigate();

const handleBackClick = () => {
  // Revenir à la page précédente
  navigate(-1); // -1 permet de revenir à la page précédente
};

    return (
        <div className='bg-[#C8AB7D] flex mx-auto my-5 rounded-md w-[70%] h-[35rem] '>
            <Corps/>
            <div className='w-[75%] h-full  bg-white'>
            <IoHomeOutline size={25} className='ml-[30rem] mt-2 cursor-pointer fixed'/>
            <h1 className='text-[#9B6A3B] text-[2rem] justify-center mx-[8rem] mt-10'>Login in your Account</h1>
            <div className='m-5 flex-auto '>
            <Input placeholder={"Email"} required  className='justify-center  border-black  items-center mx-auto rounded-md w-[24.9rem] h-[2.4rem] required hover:border-green-900 hover:border-[0.1rem]  px-4 outline-none bg-white'/>
            </div>
            <div className='ml-[4.5rem]'>
            <Input1 placeholder={"Password"} required   className=' justify-center hover:border-black items-center px-4 rounded-md w-[20rem] h-[2rem] required border-black    outline-none bg-white' icon={ (click?(<GiSemiClosedEye onClick={handleClick} size={20}  className='my-2.5 cursor-pointer'/>):(<GoEyeClosed  onClick={handleClick} size={20} className='my-2.5 cursor-pointer'/> )) } />
            </div>
             <div className='flex gap-4 justify-center mr-[14rem] m-5'><RiCloseCircleLine size={25} className='cursor-pointer' /><h1 className=' text-[1rem]'>Password strength</h1></div>
             <div className='flex gap-4 justify-center mr-[11.5rem]'><RiCloseCircleLine size={25} className='cursor-pointer' /> <h1 className=' text-[1rem]'>At least 10 characters</h1></div>
            <Button type={"button"} text={"Create Account"} className=" cursor-pointer rounded-md w-[25rem] h-[2.5rem] text-[1.5rem] translate-y-0 hover:animate-pulse bg-[#3C4328]"></Button>
            <div className=' ml-24 mt-2'><h1 className='text-[1.1rem]'>Already have an account?<span className='hover:text-[#9B6A3B] cursor-pointer' onClick={handleBackClick}>Create Account</span></h1></div>
            <div className='flex gap-3 justify-center mt-4'><hr className='w-[11rem] mt-3 bg-gray-700 h-0.5 ' /><h1>Or</h1><hr className='w-[11rem] mt-3 bg-gray-700 h-0.5 ' /></div>
            <div className='flex gap-4 justify-center mt-5'>
            <div className='flex w-[12rem] border-black border-[0.1rem] rounded-md gap-2 py-1.5 px-2 h-[2.5rem] '>{<FaFacebook className='my-1 cursor-pointer' />}<h1 className='text-[0.9rem]'>Sign up with Facebook</h1></div>
            <div className='flex border-black border-[0.1rem] w-[12rem] rounded-md gap-3 py-1.5 px-4 h-[2.5rem]'>{<FaGoogle  className='my-1 cursor-pointer'/>}<h1 className='text-[0.9rem]'>Sign up with Google</h1></div>
            </div>
        </div>
        </div>
    );
}
export default Login;