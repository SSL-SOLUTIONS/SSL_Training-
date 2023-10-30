import React from 'react'
import Evaluate from '../Bottom_Section/Evaluate'

const Hire = () => {
  return (
    <>
        <div className='container-fluid pb-5' style={{backgroundColor:"#e7f8f1"}}>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='mt-5 col-lg-4'>
                        <div className='mt-5 inner-content'>
                            <h1 className='black font-weight-bolder my-font'>
                                Hire One-Stop Solution for Your Technical Assessments
                            </h1>
                            <h4>
                            The Test Rabbit Evaluation Engine is a complete set of services that will assist you in hiring the greatest developers, evaluating programming expertise, and keeping them engaged with challenging coding exercises, collaborative pair-programming sessions, and gamified coding competitions.
                            </h4>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='mt-5 col-lg-7'>
                        <div className='banner-1'>
                            <img src='img_02.png' className='w-100'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Evaluate />
    </>
  )
}

export default Hire
