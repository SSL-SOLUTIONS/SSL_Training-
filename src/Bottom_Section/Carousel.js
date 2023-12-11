import React from "react";
import TestRabbit from "../Bottom_Section/TestRabbit";
import "../Bottom_Section/css/testrabbit.css";

function Carousel() {
  return (
    <div>
      <div className="container-fluid bg-light py-3">
        <div className="row">
          <div className="col-12">
            <div className="slider-content">
              <div className="swiper-container">
                <div className="swiper-wrapperr d-flex">
                  <div className="swiper-slide">
                    <div className="slide-image ">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/livewire.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/eduleaf-1.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/redrover.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="image-slide">
                      <div className="slide-image">
                        <img
                          className="slide-img img-fluid"
                          src="https://letsremotify.com/wp-content/uploads/2023/08/showgizmo.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/context.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/smarter-sorting.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/zooppa.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/intellirent.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-image">
                      <img
                        className="slide-img img-fluid"
                        src="https://letsremotify.com/wp-content/uploads/2023/08/kudo.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestRabbit />
    </div>
  );
}

export default Carousel;
