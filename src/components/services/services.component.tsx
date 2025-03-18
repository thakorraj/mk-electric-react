const ServicesComponent = () => {
    return (
        <main role="main">
        {/*<!-- Content -->*/}
        <article>
            <header className="section background-dark">
                <div className="line">
                    <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">Services</h1>
                    <p className="margin-bottom-0 text-size-16">No job is too big or small – whether it’s a quick repair or
                        a full electrical upgrade, we bring expertise and dedication to every project. We don’t just fix
                        wires; we create smarter, safer, and more energy-efficient spaces with cutting-edge electrical
                        solutions.</p>
                </div>
            </header>
        </article>

        {/*<!-- Services tiles -->*/}
        <section className="section-small-padding background-white text-center">
            <div className="line">
                <div className="margin">
                    <div className="s-12 m-12 l-4 margin-m-bottom">
                        <div className="padding-2x block-bordered">
                            <i className="icon-sli-home icon-com icon3x text-dark center margin-bottom-30"></i>
                            <h2 className="text-thin">Transformations</h2>
                            <p className="margin-bottom-30 three-block-para">Upgrade your home or office with our 
                                expert electricians, handling all wiring, rewiring, 
                                and new construction projects with precision, innovation, and seamless execution.</p>
                            <a className="button button-dark-stroke text-size-12" href="#transformation-service">GET MORE INFO</a>
                        </div>
                    </div>
                    <div className="s-12 m-12 l-4 margin-m-bottom">
                        <div className="padding-2x block-bordered">
                            <i className="icon-electricity icon-com icon3x text-dark center margin-bottom-30"></i>
                            <h2 className="text-thin">Panels</h2>
                            <p className="margin-bottom-30 three-block-para">Enhance your electrical panel for a safer, 
                                more efficient, and future-ready power system with our expert electricians.</p>
                            <a className="button button-dark-stroke text-size-12" href="#panel-service">GET MORE INFO</a>
                        </div>
                    </div>
                    <div className="s-12 m-12 l-4 margin-m-bottom">
                        <div className="padding-2x block-bordered">
                            <i className="icon-sli-bulb icon-com icon3x text-dark center margin-bottom-30"></i>
                            <h2 className="text-thin">Additional Services</h2>
                            <p className="margin-bottom-30 three-block-para">From lighting installations to wiring upgrades, 
                                we offer a full range of additional electrical services to power your 
                                home or business safely and efficiently.</p>
                            <a className="button button-dark-stroke text-size-12" href="#additional-services">GET MORE INFO</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*<!-- Actual services section -->
        <!-- Service 1 -->*/}
        <section className="section-small-padding background-light text-center" id="transformation-service">
            <div className="line margin-top-30">
                <div className="margin">
                    <div className="s-12 m-6 l-6">
                        <img src="assets/img/services-01.jpeg" alt=""/>
                    </div>
                    <div className="s-12 m-6 l-6">
                        <h3 className="text-size-20 text-line-height-1 margin-top-30 text-center">Transformations - Renovation &amp; Reconstruction</h3>
                        <p className="margin-top-30">
                            Looking to transform your home or office with a renovation? Our expert 
                            electricians are here to power your vision with precision and reliability. 
                            Whether you need professional wiring or rewiring for your kitchen, bathroom, 
                            basement, or any other space, we ensure every detail is handled seamlessly. 
                            Sit back and relax as we bring your project to life with skill and efficiency.  
                            <br/>
                            Planning a new construction? Our team will take charge of the entire electrical 
                            setup, from initial design to final installation, ensuring safety, 
                            efficiency, and modern functionality. With a commitment 
                            to quality craftsmanship and innovative solutions, we’re here to 
                            light up your space—exactly the way you envision it.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/*<!-- Service 2 -->*/}
        <section className="section-small-padding text-center" id="panel-service">
            <div className="line margin-top-30">
                <div className="margin">
                    <div className="s-12 m-6 l-6">
                        <h3 className="text-size-20 text-line-height-1 margin-top-50 text-center">Panel Change/Upgrade</h3>
                        <p className="margin-top-30">
                            Is your electrical panel outdated or struggling to keep up with your power needs? 
                            Our expert electricians specialize in electrical panel upgrades, 
                            ensuring your home or business runs safely and efficiently. Whether you need to replace an old fuse box, 
                            increase capacity for modern appliances, or enhance overall reliability, we provide seamless 
                            installation with top-quality workmanship. A modern panel not only prevents electrical hazards but 
                            also improves energy efficiency and prepares your property for future power demands. 
                            Trust our team to deliver a safe, code-compliant, and hassle-free panel upgrade that keeps your 
                            electrical system running smoothly.
                        </p>
                    </div>
                    <div className="s-12 m-6 l-6">
                        <img src="assets/img/services-02.jpeg" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        {/*<!-- Additional Services -->*/}
        <section className="section-small-padding background-light" id="additional-services">
            <div className="line margin-top-30">
                <div className="margin">
                    <div className="s-12 m-6 l-6">
                        <img src="assets/img/services-03.jpeg" alt=""/>
                    </div>
                    <div className="s-12 m-6 l-6">
                        <h3 className="text-size-20 text-line-height-1 margin-top-10 text-center">Additional Services</h3>
                        <p className="margin-top-10">
                            Our licensed electricians are experts in:
                            </p><ul className="services">
                                <li>Troubleshooting electrical problems and restoring power</li>
                                <li>Installing smoke and carbon monoxide detectors for safety</li>
                                <li>Repairing electrical short circuits</li>
                                <li>Upgrading and installing light fixtures</li>
                                <li>Installing GFCI outlets and AFCI circuits for added protection</li>
                                <li>Providing surge protection solutions to safeguard your electronics</li>
                                <li>Upgrading from two-prong to three-prong outlets</li>
                                <li>Enhancing energy efficiency with LED lighting installations</li>
                            </ul>
                            <p></p>
                            <p>We ensure your electrical systems are not only safe but also optimized for maximum performance and reliability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
  }
  
  export { ServicesComponent }