import React from 'react'
import TestRabbit from '../Bottom_Section/TestRabbit'
import '../Bottom_Section/css/testrabbit.css'

function Carousel() {
    return (
        <div>
             <div class="container-fluid bg-light py-3">
        <div class="row">
            <div class="col-12">
                <div class="slider-content">
                    <div class="swiper-container">
                        <div class="swiper-wrapperr d-flex">
                            <div class="swiper-slide">
                                <div class="slide-image ">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/livewire.svg" alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/eduleaf-1.svg" alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/redrover.svg" alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="image-slide">
                                    <div class="slide-image">
                                        <img class="slide-img img-fluid"
                                            src="https://letsremotify.com/wp-content/uploads/2023/08/showgizmo.svg"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/context.svg" alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/smarter-sorting.svg"
                                        alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/zooppa.svg" alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/intellirent.svg"
                                        alt="" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-image">
                                    <img class="slide-img img-fluid"
                                        src="https://letsremotify.com/wp-content/uploads/2023/08/kudo.svg" alt="" />
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
    )
}

export default Carousel
