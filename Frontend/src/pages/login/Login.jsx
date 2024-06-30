import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-flter backdrop-blur-md bg-opacity-0'>
            <h2 className=' text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className=' text-blue-400 ml-2'>KoKo</span>
                </h2>

                <form >
                    <div>
                        <label htmlFor='input' className=' label p-2'>
                            <span className=' text-base label-text'>Username</span>
                        </label>
                        <input name='input' type="text" placeholder="Username" className="input input-bordered border-primary w-full max-w-xs" />
                    </div>

                    <div>
                        <label className=' label'>
                            <span className=' text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" 
                        className="input border-primary input-bordered w-full max-w-xs" />
                    </div>
                    <a href='#' className=" text-sm text-gray-300 hover:underline hover:text-gray-200 mt-2 inline-block">
                        Don't have an account?
                    </a>
                    <div className=' w-full max-w-xs mt-3'>
                         <button className=' btn border-primary btn-sm btn-block'>Login</button>
                    </div>

                </form>
        </div>

    </div>
  )
}

export default Login;