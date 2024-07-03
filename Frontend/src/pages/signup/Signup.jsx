import React, { useState } from 'react'
import { GenderCheckBox } from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs ,setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '', 
    });

    const {loading , signup} = useSignup();

    const handleCheckbocChange = (gender) => {
        setInputs({...inputs, gender})
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter
          backdrop-blur-lg bg-opacity-0'>
            
            <h1 className=' text-3xl font-semibold text-center text-gray-300'> 
                Signup <span className=' text-blue-400'> Kokoapp</span>
            </h1>

            <form onSubmit={handleSubmit} >
                <div>
                    <label className='label p-2 '>
                        <span className='text-gray-300 text-base label-text'>Full Name</span>
                    </label>

                    <input type="text"  placeholder="John Cena" 
                    className="input border-primary input-bordered w-full "
                    value={inputs.fullName} 
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                    
                </div>

                <div>
                    <label className='label p-2'>
                        <span className=' text-base text-gray-300 label-text'>Username</span>
                    </label>

                    <input type="text" placeholder="johncena" 
                    className="input  border-primary input-bordered w-full  "
                    value={inputs.username}
                    onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className=' text-base text-gray-300 label-text'>Password</span>
                    </label>

                    <input type="password" placeholder="Enter password" 
                    className="input border-primary input-bordered w-full " 
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className=' text-base text-gray-300 label-text'>Confirm Password</span>
                    </label>

                    <input type="password" placeholder="Confirm password" 
                    className="input border-primary input-bordered w-full " 
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>
                
                <GenderCheckBox onCheckboxChange = {handleCheckbocChange} selectedGender= {inputs.gender} />
                

                <Link to={'/login'} className=' text-sm mt-2 hover:underline hover:text-white
                  inline-block'>Already have an account ?
                </Link>

                <div>
                    <button className=' btn btn-sm mt-3 btn-block border-primary'
                    disabled={loading}  > 
                    {loading ? <span className=' loading loading-spinner'></span> : "Signup"}
                    
                    </button>
                </div>

            </form>
        </div>        

    </div>
  )
}

export default Signup