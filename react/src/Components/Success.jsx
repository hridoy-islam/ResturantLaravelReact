import axios from "axios";
import success from "../assets/success.png"
import {Link, useNavigate, useParams} from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Contexts/MainContext";

const Success = () => {
  
   
  

   return(
    <div className='grid place-items-center w-full lg:h-screen h-full
        font-raleway '>
         <div className='max-w-5xl rounded flex flex-col mt-12'>
              <span className='text-green-600 text-5xl'>Order Placed Successfully</span>
              <span className='text-yellow-600 text-center mt-8 text-2xl font-bold'>
              
              </span>
              <div className='flex justify-end items-center mx-auto my-12 w-60'>
               <img className='w-full' src={success} alt=""/>
              </div>
              <div className='my-10 mx-auto'>
               <Link to="/" className='underline text-xl underline-offset-4'>
                 Back to Home Page
               </Link>
              </div>
         </div>
       </div>
   )
}

export default Success
