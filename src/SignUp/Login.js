import React, { useState } from 'react';
import '../SignUp/Style.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setErrors({ ...errors, email: 'Email is required' });
      return;
    }

    if (!formData.password.trim()) {
      setErrors({ ...errors, password: 'Password is required' });
      return;
    }

    try {
      const response = await Axios.post('http://localhost:8080/auth/login', formData);
      const { user, token } = response.data;

      // Set the session in a cookie
      document.cookie = `token=${token}; path=/; max-age=${60 * 30}`; // 30 minutes (adjust as needed)

      setError('Logged In Successfully');
      navigate('/courses');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred while processing your request.');
      }
    }
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='sign-up-bg m-3 py-4 text-center'>
              <img src='/login.png' className='mt-5 pt-3' alt='Img' />
            </div>
          </div>

          <div className='col-lg-1'></div>

          <div className='col-lg-5  mt-5 pt-5'>
            <div className='heading-signup'>
              <img src='logo_header.png' alt='logo' />
              <h4 className='mt-4 ml-3'>
                <strong>
                  Welcome Back! <br></br>
                  Enter your credentials to access your account.
                </strong>
              </h4>
              <br></br>
            </div>
            <div className='signup'>
              <form onSubmit={handleLogIn} method='POST'>
                <h5>
                  <b>Email</b>
                  <span>*</span>
                </h5>
                <i className='fa-solid fa-user'></i>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />{' '}
                <br />
                <small className='text-danger'>{errors.email}</small>
                <br></br>
                <br></br>
                <h5>
                  <b>Password</b>
                  <span>*</span>
                </h5>
                <i className='fa-solid fa-user'></i>
                <input
                  type='password'
                  placeholder='Enter Your Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />{' '}
                <br />
                <small className='text-danger'>{errors.password}</small>
                <div className='mix'>
                  <button className='pricing-btn w-50 mt-4 ml-3' type='submit'>
                    Login
                  </button>
                  <br></br>
                  <br></br>
                  <h5>{error && <span style={{ color: 'red' }}>{error}</span>}</h5>
                  <h5>
                    Already have an account?
                    <NavLink to='/SignUp'>Sign Up</NavLink>
                  </h5>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
