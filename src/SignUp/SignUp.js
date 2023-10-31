import React from 'react'
import '../SignUp/Style.css'

const SignUp = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='sign-up-bg m-3 py-4 text-center'>

                            <img src='/login.png' className='mt-5 pt-3'></img>
                        </div>
                    </div>

                    <div className='col-lg-6 mt-5 pt-5'>
                        <div className='heading-signup'>
                            <h2>Sign Up</h2>
                            <h6>
                                <strong>Please Fill in Your personal Details Below:</strong>
                            </h6> <br></br>
                        </div>
                        <div className='signup'>

                            <form>
                                <h5><b>Name</b><span>*</span></h5>

                                <i class="fa-solid fa-user"></i>
                                <input type='text' placeholder='Enter Your Name' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>City</b>
                                    <span>*</span>
                                </h5>

                                <i class="fa-solid fa-location-dot"></i>
                                <input type='text' placeholder='Enter Your City' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>Experience</b>
                                    <span>*</span>
                                </h5>

                                <i class="fa-regular fa-calendar"></i>
                                <input type='number' placeholder='Enter Your Experience' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>Phone</b>
                                    <span>*</span>
                                </h5>

                                <i class="fa-solid fa-phone-volume"></i>
                                <input type='text' placeholder='Enter Phone Number' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>Email</b>
                                    <span>*</span>
                                </h5>

                                <i class="fa-solid fa-envelope"></i>
                                <input type='Email' placeholder='Enter Phone Email' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>Password</b>
                                    <span>*</span>
                                </h5>

                                <i class="fa-solid fa-lock"></i>
                                <input type='password' placeholder='Enter Phone Password' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>Confirm Password</b>
                                    <span>*</span>
                                </h5>

                                <i class="fa-solid fa-lock"></i>
                                <input type='password' placeholder='Confirm Password' />
                                <br></br>
                                <br></br>
                                <h5>
                                    <b>Upload Your Resume</b>
                                    <span>*</span>
                                </h5>
                                <input className='border-0' type='file' placeholder='Confirm Password' />
                                <br></br>
                                <br></br>
                                <div className='mix'>
                                    <button>SignUp</button>
                                    <br></br>
                                    <br></br>
                                    Already have an account?
                                    <a href=''>Login</a>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
