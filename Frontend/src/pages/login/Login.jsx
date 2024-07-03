import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username ,setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const {loading , login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-flter backdrop-blur-md bg-opacity-0'>
            <h2 className=' text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className=' text-blue-400 ml-2'>KoKo</span>
                </h2>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor='input' className=' label p-2'>
                            <span className=' text-base label-text'>Username</span>
                        </label>
                        <input name='input' type="text" placeholder="Username" className="input input-bordered border-primary w-full max-w-xs"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>

                    <div>
                        <label className=' label'>
                            <span className=' text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" 
                        className="input border-primary input-bordered w-full max-w-xs" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to={'/signup'} className=" text-sm text-gray-300 hover:underline hover:text-gray-200 mt-2 inline-block">
                        Don't have an account?
                    </Link>
                    <div className=' w-full max-w-xs mt-3'>
                         <button className=' btn border-primary btn-sm btn-block'
                          disabled={loading}
                         > 
                          {loading ? <span className=' loading loading-spinner'></span> : "Login"}
                          </button>
                    </div>

                </form>
        </div>

    </div>
  )
}

export default Login;