import React from 'react'

const Signup = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/224529cf-4e56-4e10-96f6-63ee4fe82a4b/IT-it-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form className='w-full flex flex-col py-4'>
                  <input className='bg-gray-700 rounded my-2 p-3' type="email" placeholder='Email' autoComplete='email' />
                  <input className='bg-gray-700 rounded my-2 p-3' type="password" placeholder='Password' autoComplete='current-password' />
                  <button className='bg-red-600 text-white py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex justify-between items-center'>
                    <p><input className='mr-2' type="checkbox"/>Remember me</p>
                    <p>Need Help?</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </>

  )
}

export default Signup