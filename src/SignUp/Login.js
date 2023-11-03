import React from 'react'
import '../SignUp/Style.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='sign-up-bg m-3 py-4 text-center'>
              <img src='/login.png' className='mt-5 pt-3'></img>
            </div>
          </div>

          <div className='col-lg-1'></div>

          <div className='col-lg-5  mt-5 pt-5'>
            <div className='heading-signup'>
              <img src='logo_header.png'></img>
              <h4 className='mt-4 ml-3'>
                <strong>
                  Welcome Back! <br></br>
                  Enter your credentials to access your account.
                </strong>
              </h4>
              <br></br>
            </div>
            <div className='signup'>

              <form>

                <h5><b>Email</b><span>*</span></h5>

                <i class="fa-solid fa-user"></i>
                <input type='email' placeholder='Enter Your Email' />

                <br></br>
                <br></br>
                <h5><b>Password</b><span>*</span></h5>
                <i class="fa-solid fa-user"></i>
                <input type='password' placeholder='Enter Your Password' />

                <div className='mix'>
                  <button className='pricing-btn w-50 mt-4 ml-3'>Login</button>
                  <br></br>
                  <br></br>
                  <h5>
                    Already have an account?
                    <NavLink to="/SignUp">Sign Up</NavLink>
                  </h5>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
