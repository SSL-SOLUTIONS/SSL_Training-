import React from "react";
import "../Bottom_Section/css/customer.css";
import Question from "./Question";
import CarouselCard from "../Components/CarouselCard";

function Customer() {
  return (
    <div>
      <div className="customer-bg mt-5">
        <div className="text-center customer container pt-5">
          <h1 className="black">Our Customers</h1>
          <p>
            SSL Training results-driven technical hiring solution is in common
            hands of top-notch global enterprises to hire top vetted talent 2x
            times faster, but don’t take our word for it. Here’s what they had
            to say.
          </p>
        </div>
        <CarouselCard />
      </div>
      <Question />
    </div>
  );
}

export default Customer;
