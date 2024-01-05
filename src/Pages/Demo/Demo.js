import React,{useState} from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./Demo.css"
const Demo = () => {
    const [formData, setFormData]= useState({
        Name: "",
        companyName: "",
        companySize: "",
        email: ""
    });
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log({ ...formData, [e.target.name]: e.target.value });
    }
  return (
    <>
      <Navbar />
      <div className="requestWrapper">
        <div className="demo-left">
          <h1>We’d love to hear from You</h1>
          <p>
            We at SSL Trainings make things easier to secure Your dream job –
            regardless of your location. We ensure to orient your time and
            effort towards professional success as personal progress. <br /> <br />{" "}
            Here’s a great opportunity for you to create innovative solutions
            for real-life enterprises that assist in accelerating growth.
          </p>
          <h4>Why SSL Trainings?</h4>
          <ul>
            <li>Market Competitive Courses</li>
            <li>Flexible Timing for learning</li>
            <li>Skilled based learning</li>
            <li>Next-level practical Projects</li>
          </ul>
          <div className="left-bottomImg">
            <img src="https://testrabbit.co/wp-content/uploads/2023/06/Logos.jpg"></img>
          </div>
        </div>
        <div className="right-Demoform">
          <h2>Schedule a Demo</h2>
          <p>With our goal tracking platform, you can stay organized.</p>
          <div className="input-cont">
            <label htmlFor="Name">Name<span>*</span></label> <br />
            <input
              type="text"
              placeholder="Enter your Name"
              name="Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-cont">
            <label htmlFor="email">Email<span>*</span></label> <br />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-cont">
            <label htmlFor="companyName">Company Name<span>*</span></label> <br />
            <input
              type="text"
              placeholder="Enter your Company Name"
              name="companyName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-cont">
            <label htmlFor="companySize">Company Size<span>*</span></label> <br />
            <input
              type="text"
              placeholder="Enter Company Size"
              name="companySize"
              required
              onChange={handleChange}
            />
          </div>
          <button className="demoBtn">Schedule a Demo</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Demo;
