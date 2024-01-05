import React from "react";

function CarouselCard() {
  return (
    <div>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 text-right">
              <a
                className="btn btn-primary mb-3 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn btn-primary mb-3 "
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>

            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                          />
                          <div className="text-right"></div>
                          <div className="card-body">
                            <h4 className="card-title">John H.</h4>
                            <p className="card-text">
                              I had an amazing experience with this company! The
                              customer service was top-notch, and the learning
                              experience exceeded my expectations. I highly
                              recommend them to anyone looking for quality
                              products and excellent service.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3 d-none d-sm-block">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Sarah L.</h4>
                            <p className="card-text">
                              I am a repeat joinee of this learning platform,
                              and they never disappoint. The team is always
                              friendly and helpful, and their products are
                              outstanding. I’ve recommended them to all my
                              friends and family, and I will continue to do so!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 d-none d-sm-block">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                          />
                          <div className="card-body">
                            <h4 className="card-title">David W.</h4>
                            <p className="card-text">
                              After trying several other platforms, I finally
                              found the perfect fit with this one. Their
                              attention to detail and commitment to their
                              clients satisfaction is unparalleled. I will
                              definitely be using their services again in the
                              future.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Emily R.</h4>
                            <p className="card-text">
                              I can’t say enough good things about this
                              business. From the moment I contacted them, they
                              were responsive and accommodating. The quality of
                              their work is exceptional, and I couldn’t be
                              happier with the final result.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 d-none d-sm-block">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Mark T.</h4>
                            <p className="card-text">
                              I’ve been a loyal customer for years, and I
                              continue to be impressed with this company. Their
                              team is dedicated to providing the best service
                              possible, and it shows in every interaction. I
                              highly recommend them to anyone in need of their
                              services.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 d-none d-sm-block">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Lisa M.</h4>
                            <p className="card-text">
                              “I recently made a purchase from this platform,
                              and I am extremely satisfied with the entire
                              course. The website is user-friendly, the ordering
                              process is seamless, and the course started on
                              time and in perfect scenerios. Thank you for a
                              fantastic experience!”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Amanda P.</h4>
                            <p className="card-text">
                              “I had a fantastic experience with this business.
                              The team was friendly, knowledgeable, and
                              efficient. They made the entire process smooth and
                              stress-free. I will definitely be using their
                              services again in the future.”
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 d-none d-sm-block">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Robert K.</h4>
                            <p className="card-text">
                              “I was blown away by the level of professionalism
                              and expertise displayed by this company. They went
                              above and beyond to ensure my satisfaction, and I
                              can confidently say that they have earned a
                              lifelong customer.”
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3 d-none d-sm-block">
                        <div className="card">
                          <img
                            className="img-fluid mt-4 mx-4"
                            alt="100%x280"
                            src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                          />
                          <div className="card-body">
                            <h4 className="card-title">Jennifer S.</h4>
                            <p className="card-text">
                              “Five stars all the way! The service, the product,
                              and the overall experience were outstanding. I
                              will definitely be a repeat customer and will
                              recommend them to everyone I know.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarouselCard;
