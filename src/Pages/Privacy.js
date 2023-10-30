import React from 'react'
import '../Pages/css/privacy.css'

function Privacy() {
  return (
    <div>
      <div className='container-fluid pb-5 bg-light'>
        <div className='container'>
          <div className='pt-5 policy-text text-center'>
            <h1 className='black pt-5 my-font'>
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
              <a href='' className='active'>About TestRabbit</a>
            </div>
            <div className='col-lg-2'>
              <a href=''>About TestRabbit</a>

            </div>
            <div className='col-lg-2'>
              <a href=''>About TestRabbit</a>
            </div>
            <div className='col-lg-5'></div>
          </div>
        </div>
      </div>


      <div className='container mt-5'>
        <h1 className='my-font black'>About TestRabbit</h1>
        <p>
          Code together before you work together. See how candidates collaborate and communicate on real-life problems.
        </p>
      </div>

      <div className='container text-center'>
        <img className='w-75' src='/screen4.jpg'></img>
      </div>







    </div>
  )
}

export default Privacy
