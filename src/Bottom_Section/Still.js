import React from "react";
import "../Bottom_Section/css/still.css";
import Customer from "./Customer";
import { useNavigate } from "react-router-dom";

function Still() {
  const navigate = useNavigate();
  return (
    <div className="customer-main">
      <div className="mt-5">
        <div className="still-bg">
          <div className="container pt-5 text-center">
            <h1 className="still-heading mt-5 pt-5 black">
              Still, thinking? Explore top-notch talent now.
            </h1>
            <h4 className="pt-3">
              Start screening today through our free plan.
            </h4>
            <button onClick={()=>navigate('/contact')} className="pricing-btn mt-4">Consult Us</button>
          </div>
        </div>
      </div>
      <Customer />
    </div>
  );
}

export default Still;
