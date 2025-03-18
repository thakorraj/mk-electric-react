const HomeComponent = () => {
  return (
    <main role="main">
      {/* Main Header */}
      <header>
        <div className="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center owl-loaded owl-drag">
                        
        <div className="owl-stage-outer"><div className="owl-stage">
          <div className="owl-item active">
            <div className="item">
            <div className="s-12">
              <img src="assets/img/electircal-banner.jpeg" alt="" />
              <div className="carousel-content">
                <div className="content-center-vertical line">
                  <div className="margin-top-bottom-80">
                    {/*<!-- Title -->*/}
                    {/*<!-- <h1 className="text-white margin-bottom-30 text-size-55 text-m-size-30 text-line-height-1">Reliable, Safe, and Expert Electrical Solutions – Powered by Experience!</h1> -->*/}
                    <h1 className="text-white margin-bottom-30 text-size-50 text-m-size-30 text-line-height-1">Wired for Excellence, Powered by Experience.</h1>
                    {/*<!-- <div className="s-12 m-10 l-8 center"><p className="text-white text-size-14 margin-bottom-40">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Iriure dolor in hendrerit duis autem vel eum in vulputate velit esse molestie consequat.</p></div> -->*/}
                    {/*<!-- <div className="line">
                      <div className="s-12 m-12 l-3 center">
                        <a className="button button-white-stroke s-12" href="/">Get Started Now</a>
                      </div>       
                    </div>   -->*/}
                  </div>
                </div>
              </div>
            </div>
          </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"></div><div className="owl-next"></div></div><div className="owl-dots disabled"><div className="owl-dot active"><span></span></div></div></div>               
      </header>

      {/* Section 1 */}
      <section className="section-small-padding background-white text-center">
        <div className="line">
          <div className="margin">
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <div className="padding-2x block-bordered">
                <i className="icon-tools icon-com icon3x text-dark center margin-bottom-30"></i>
                <h2 className="text-thin">What we do</h2>
                <p className="margin-bottom-30 three-block-para">Providing electrical contracting, operations, and maintenance services for industrial facilities, renewable energy asset owners, and original equipment manufacturers (OEMs).</p>
                <a className="button button-dark-stroke text-size-12" href="/">GET MORE INFO</a>
              </div>
            </div>
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <div className="padding-2x block-bordered">
                <i className="icon-electricity icon-com icon3x text-dark center margin-bottom-30"></i>
                <h2 className="text-thin">Our Strength</h2>
                <p className="margin-bottom-30 three-block-para">With over 1,000 highly skilled professionals spread across our distributed branch network, we are able to serve clients throughout North America.</p>
                <a className="button button-dark-stroke text-size-12" href="/">GET MORE INFO</a>
              </div>
            </div>
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <div className="padding-2x block-bordered">
                <i className="icon-handshake icon-com icon3x text-dark center margin-bottom-30"></i>
                <h2 className="text-thin">Our Promise</h2>
                <p className="margin-bottom-30 three-block-para">We ensure top-tier quality in service, reliability, and safety.</p>
                <a className="button button-dark-stroke text-size-12" href="/">GET MORE INFO</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="section">
        <div className="line">
          <h2 className="text-size-50  text-m-size-40 text-center">About Us</h2>
          <hr className="break-small background-primary break-center" />
        </div>
        <div className="line">
          <div className="margin">
            <div className="s-12 m-12 l-2">
              <p className="h1 text-size-25 margin-m-bottom-30 text-primary text-line-height-1 text-right">We Are<br /> Power Industry Experts</p>
            </div>
            <div className="s-12 m-12 l-5">
              <p className="text-size-14 margin-m-bottom-30 text-dark">MK, is a leading independent provider of comprehensive electrical services, operations, and maintenance for the industrial, utility, and renewable energy sectors across North America. We strive to become our customers' Trusted Partner in Power™.</p>
            </div>
            <div className="s-12 m-12 l-5">
              <p className="text-size-14 text-dark">At MK, we're dedicated to delivering top-quality services in the communities where we live and work. We believe that by working together, we can build stronger futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="full-width">
        <div className="s-12 m-12 l-6">
          <img src="assets/img/img-12.jpg" alt="" />
        </div>
        <div className="s-12 m-12 l-6">
          <div className="padding-2x">
            <div className="line">
              <div className="float-left">
                <div className="icon-maintenance icon-com icon3x text-dark"></div>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Preventative Maintenance</h3>
                <p className="text-dark">We provide predictive testing and data analysis to optimize uptime and prevent potential hazards.</p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <div className="icon-controls icon-com icon3x text-dark"></div>
              </div>
              <div className="margin-left-60 margin-bottom-30">
                <h3 className="text-size-25 margin-bottom-0">Controls and Automation</h3>
                <p>Programming, maintenance, and emergency services to enhance your facility's performance.</p>
              </div>
            </div>

            <div className="line">
              <div className="float-left">
                <i className="icon-sli-globe-alt icon3x text-dark"></i>
              </div>
              <div className="margin-left-60">
                <h3 className="text-size-25 margin-bottom-0">And many more...</h3>
                <p className="text-dark">We offer reliable and dedicated support for your electrical projects, equipment, and systems to optimize production across your operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      {/* <section className="section background-white" >  
        <div className="line">
          <h2 className="text-size-50  text-m-size-40 text-center">Our Stats</h2>
          <hr className="break-small background-primary break-center">
          <div className="margin margin-top-bottom-50">
            <div className="s-12 m-12 l-3">
              <div className="block">
                <div className="count-to">
                  <span className="timer h1 text-size-50  text-m-size-40">1500</span>
                  <p className="h1 text-size-20 margin-top-10 text-dark text-thin">Eodem modo typi</p> 
                </div>
              </div>
            </div>
            <div className="s-12 m-12 l-3">
              <div className="block">
                <div className="count-to">
                  <span className="timer h1 text-size-50  text-m-size-40">95%</span>
                  <p className="h1 text-size-20 margin-top-10 text-dark text-thin">Duis autem</p> 
                </div>
              </div>
            </div>
            <div className="s-12 m-12 l-3">
              <div className="block">
                <div className="count-to">
                  <span className="timer h1 text-size-50  text-m-size-40">287</span>
                  <p className="h1 text-size-20 margin-top-10 text-dark text-thin">Mirum est notare</p> 
                </div>
              </div>
            </div>
            <div className="s-12 m-12 l-3">
              <div className="block">
                <div className="count-to">
                  <span className="timer h1 text-size-50  text-m-size-40">7 milion</span>
                  <p className="h1 text-size-20 margin-top-10 text-dark text-thin">Nam liber tempor</p> 
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section> */}

      <hr className="break margin-top-bottom-0" />

      {/* Section 4 */}
      {/* <section className="section-top-padding full-width">
        <h2 className="text-size-50  text-m-size-40 text-center">Our Work</h2>
        <hr className="break-small background-primary break-center"> 
        <div className="tabs background-primary-hightlight">
            <div className="tab-item tab-active">
              <a className="tab-label active-btn">Web Design</a>
              <div className="tab-content lightbox-gallery">
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-02.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-02.jpg" alt="" title="Portfolio Image 1" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-09.jpg" alt="" title="Portfolio Image 2" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-08.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-08.jpg" alt="" title="Portfolio Image 3" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-05.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-05.jpg" alt="" title="Portfolio Image 4" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-06.jpg" alt="" title="Portfolio Image 5" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-11.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-11.jpg" alt="" title="Portfolio Image 6" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-12.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-12.jpg" alt="" title="Portfolio Image 7" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-07.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-07.jpg" alt="" title="Portfolio Image 8" />
                  </a>	
                </div>
              </div>  
            </div>
            <div className="tab-item">
              <a className="tab-label">Graphic Design</a>
              <div className="tab-content lightbox-gallery">
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-04.jpg" alt="" title="Portfolio Image 1" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-06.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-06.jpg" alt="" title="Portfolio Image 2" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-13.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-13.jpg" alt="" title="Portfolio Image 3" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-05.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-05.jpg" alt="" title="Portfolio Image 4" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-12.jpg" alt="" title="Portfolio Image 5" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-14.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-14.jpg" alt="" title="Portfolio Image 6" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-07.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-07.jpg" alt="" title="Portfolio Image 7" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-10.jpg" alt="" title="Portfolio Image 8" />
                  </a>	
                </div>
              </div>  
            </div>
            <div className="tab-item">
              <a className="tab-label">Campaigns</a>
              <div className="tab-content lightbox-gallery">
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-03.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-03.jpg" alt="" title="Portfolio Image 9" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-01.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-01.jpg" alt="" title="Portfolio Image 10" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-09.jpg" alt="" title="Portfolio Image 11" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-14.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-14.jpg" alt="" title="Portfolio Image 12" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-07.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-07.jpg" alt="" title="Portfolio Image 13" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-13.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-13.jpg" alt="" title="Portfolio Image 14" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/video.mp4">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-11.jpg" alt="" title="Portfolio Image 15" />
                  </a>	
                </div>
                <div className="s-12 m-6 l-3">
                  <a className="image-with-hover-overlay image-hover-zoom" href="img/portfolio/portfolio-04.jpg">
                    <div className="image-hover-overlay background-primary"> 
                      <div className="image-hover-overlay-content text-center padding-2x">
                        <h2 className="text-thin">Lorem Ipsum Dolor</h2> 
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                      </div> 
                    </div> 
                    <img src="img/portfolio/thumb-04.jpg" alt="" title="Portfolio Image 16" />
                  </a>	
                </div>
              </div>  
            </div>
         </div>
      </section> */}

      {/* Section 5 */}
      <section className="section background-white text-center">
        <div className="line">
          <h2 className="text-size-50  text-m-size-40 text-center">Testimonials</h2>
          <hr className="break-small background-primary break-center" />
          <div className="carousel-default owl-carousel carousel-wide-arrows">
            <div className="item">
              <div className="s-12 m-12 l-7 center text-center">
                <img className="image-testimonial-small" src="assets/img/testimonials-04.png" alt="" />
                <p className="h1 margin-bottom text-size-20">Excellent work! He not only resolved our electrical issue but also performed a thorough safety check to ensure everything was in top shape. Friendly, honest, and reliable—exactly what you want in an electrician!</p>
                <p className="h1 text-size-16">Scott Star / CEO / Company</p>
              </div>
            </div>
            <div className="item">
              <div className="s-12 m-12 l-7 center text-center">
                <img className="image-testimonial-small" src="assets/img/testimonials-05.png" alt="" />
                <p className="h1 margin-bottom text-size-20">I couldn’t be happier with the service! He was professional, thorough, and made sure to answer all of my questions. He even gave me tips on maintaining my electrical system. A truly top-notch experience!</p>
                <p className="h1 text-size-16">Mark Stoner / Web Developer / Company</p>
              </div>
            </div>
            <div className="item">
              <div className="s-12 m-12 l-7 center text-center">
                <img className="image-testimonial-small" src="assets/img/testimonials-06.png" alt="" />
                <p className="h1 margin-bottom text-size-20">From the moment he arrived, he was professional and respectful. He explained the issue, provided a clear solution, and got the job done efficiently. I felt confident in his work, and I know who to call for any future electrical needs!</p>
                <p className="h1 text-size-16">Jane Naismith / Web Designer / Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export { HomeComponent }