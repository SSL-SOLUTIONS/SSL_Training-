import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../Pages/css/privacy.css'
import '../css/privacy.css'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function InformationUsage() {
  return (
    <div>
      <Navbar/>
      <div className='container-fluid pb-5 bg-light'>
        <div className='container'>
          <div className='pt-5 policy-text text-center'>
            <h1 className='black pt-5 font-privacy'>
              PRIVACY POLICY
            </h1>
            <h4 className='mb-5'>
              Last updated: February 12, 2019
            </h4>
          </div>
        </div>
      </div>
      <div className='container-fluid py-5 privacy-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <NavLink to='/Privacy' className='active'>About SSL Training</NavLink>
            </div>
            <div className='col-lg-2'>
              <NavLink to='/InformationCollection'>Information Collection</NavLink>

            </div>
            <div className='col-lg-2'>
              <NavLink to='/InformationUsage'>Information Usage</NavLink>
            </div>  
            <div className='col-lg-5'></div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <h1 className='my-font black'>Information Usage</h1>
        <p className='evulate-text'>
          Code together before you work together. See how candidates collaborate and communicate on real-life problems.
        </p>
      </div>
      <div className='container mb-5 pb-5 banner-1 pt-4 text-center'>
        <img className='w-75' src='/screen4.jpg'></img>
      </div>


      <div className='container-fluid pb-5' style={{ backgroundColor: "#e7f8f1" }}>
        <div className='container mt-5'>
          <div className='row'>
            <div className='mt-5 col-lg-5'>
              <div className='mt-5 inner-content'>
                <h1 className='black font-weight-bolder my-font'>
                  What does SSL Training do?
                </h1>
                <h4>
                  The SSL Training Evaluation Engine is a complete set of services that will assist you in hiring the greatest developers, evaluating programming expertise, and keeping them engaged with challenging coding exercises, collaborative pair-programming sessions, and gamified coding competitions.
                </h4>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='mt-5 col-lg-6'>
              <div className='banner-1'>
                <img src='img_02.png' className='w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container pt-5 mt-5 policy'>
        <h1 className='my-font black'>
          Privacy Policy

        </h1>
        <p className='my-text'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.

        </p>

        <h1 className='my-font black'>
          Information Collection

        </h1>
        <p className='my-text'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
        </p>
        <p className='my-text'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
        </p>
        <h1 className='my-font black'>
          Non-Identifiable or Aggregated Data
        </h1>
        <p className='my-text'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
        </p>
        <p className='my-text'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
        </p>
        <br/>
        <h2 className='black'>
          Contacting SSL Solution
        </h2>
        <p className='my-text'>SSL Solution, LLC 900 Lafayette St #201, <br></br><span><p>Santa Clara, CA 95050, USA</p></span></p>
        <p className='my-text'>Telephone: <span className='info-hover'>1 (507) 338-5323</span> <br></br> <span>Email: <span className='info-hover'>SSlSolution@.com</span></span></p>
        <br></br>

      </div>

      <Footer/>

    </div>
  )
}


export default InformationUsage
