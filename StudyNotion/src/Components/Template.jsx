import React from 'react';
import { FcGoogle } from "react-icons/fc";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px] mx-0'>
        <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span><br />
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[1px] bg-richblack-700 w-full'></div>
          <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
          <div className='h-[1px] bg-richblack-700 w-full'></div>
        </div>

        <button className='flex justify-center items-center w-full rounded-[8px] font-medium text-richblack-100 border border-richblack-700 py-[8px] gap-x-2 mt-6'>
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
