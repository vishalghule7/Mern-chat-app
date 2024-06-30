import React from 'react'
import { GenderCheckBox } from './GenderCheckBox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter
          backdrop-blur-lg bg-opacity-0'>
            
            <h1 className=' text-3xl font-semibold text-center text-gray-300'> 
                Signup <span className=' text-blue-400'> Kokoapp</span>
            </h1>

            <form >
                <div>
                    <label className='label p-2 '>
                        <span className='text-gray-300 text-base label-text'>Full Name</span>
                    </label>

                    <input type="text" placeholder="John Cena" 
                    className="input border-primary input-bordered w-full " />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className=' text-base text-gray-300 label-text'>Username</span>
                    </label>

                    <input type="text" placeholder="johncena" 
                    className="input  border-primary input-bordered w-full  " />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className=' text-base text-gray-300 label-text'>Password</span>
                    </label>

                    <input type="password" placeholder="Enter password" 
                    className="input border-primary input-bordered w-full " />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className=' text-base text-gray-300 label-text'>Confirm Password</span>
                    </label>

                    <input type="password" placeholder="Confirm password" 
                    className="input border-primary input-bordered w-full " />
                </div>
                
                <GenderCheckBox/>
                

                <a href="#" className=' text-sm mt-2 hover:underline hover:text-white
                  inline-block'>Already have an account ?
                </a>

                <div>
                    <button className=' btn btn-sm mt-3 btn-block border-primary'>Signup</button>
                </div>

            </form>
        </div>        

    </div>
  )
}

export default Signup