import React from 'react'

function signup() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-5 border border-gray-50 rounded-md p-5 shadow-[0_0px_20px_rgba(0,0,0,0.15)]'>
            <span>Sign Up into Logoipsum</span>
            <div className='relative'>
                <input className='border border-gray-400 p-2 outline-blue-400 rounded-md peer' placeholder=''></input>
                <label className='absolute left-0 m-2 -mt-2 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-mt-2 peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base bg-white transition-all'>Full name</label>
            </div>
            <div className='relative'>
                <input className='border border-gray-400 p-2 outline-blue-400 rounded-md peer' placeholder=''></input>
                <label className='absolute left-0 m-2 -mt-2 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-mt-2 peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base bg-white transition-all'>Email address</label>
            </div>
            <div className='relative'>
                <input type='password' className='border border-gray-400 p-2 outline-blue-400 rounded-md peer' placeholder=''></input>
                <label className='absolute left-0 m-2 -mt-2 text-gray-400 text-xs pointer-events-none peer-focus:text-blue-400 peer-focus:text-xs peer-focus:-mt-2 peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base bg-white transition-all'>Password</label>
            </div>
            <button className='bg-blue-400 p-2 rounded-md hover:bg-blue-800 text-white hover:shadow-[0_0px_20px_rgba(0,0,0,0.55)] transition-all'>Sign up</button>
        </div>
    </div>
  )
}

export default signup