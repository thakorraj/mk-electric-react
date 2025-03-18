const AboutComponent = () => {
    return (
        <main role="main">
        {/*<!-- Content -->*/}
        <article>
          <header className="section background-dark">
            <div className="line">        
              <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">About Us</h1>
              <p className="margin-bottom-0 text-size-16">With over 8 years of combined experience, our expert electricians provide cost-effective electrical solutions for homes and businesses across the Greater Toronto Area. From new system installations to repairs and maintenance, we handle projects of all sizes with efficiency and reliability.</p>
            </div>  
          </header>
          <div className="section background-white"> 
            <div className="line">  
              <h2 className="text-size-40 margin-bottom-30">Powering Your Future</h2>
              <hr className="break-small background-primary margin-bottom-30"></hr>
              <p>
                From electrical installations and upgrades to troubleshooting and maintenance, we handle projects of all sizes with precision and care. We stay up to date with the latest technologies and industry standards, ensuring all work is performed efficiently and in compliance with safety regulations. 
                Customer satisfaction is our top priority, and we take pride in offering prompt, honest, and professional service. Whether you're looking for energy-efficient solutions, panel upgrades, or emergency repairs, we are here to help. Our work is backed by a full guarantee, giving you peace of mind knowing that your electrical systems are in expert hands.
              </p> 
              <blockquote className="margin-top-bottom-20">
                <h3 className="text-size-20 text-line-height-1 margin-bottom-15">Renowned for Unmatched Service and Quality</h3>
                We take pride in being recognized for our commitment to excellence, providing high-quality electrical solutions with attention to detail and customer satisfaction.
              </blockquote>
              
              <div className="line margin-top-30">
                <div className="margin">
                  <div className="s-12 m-6 l-6">
                    <img src="assets/img/about-us-01.jpeg" alt=""/>
                    <h3 className="text-size-20 text-line-height-1 margin-top-30 text-center">Licensed Electrical Contractors</h3>
                    <p className="margin-top-30">
                      Your peace of mind is our priority. As a company licensed by the Electrical Safety Authority (ESA Licence #7012051), we take great pride in delivering reliable and trustworthy service. Our team adheres to strict safety standards and best practices, ensuring that every electrical job is completed with the highest level of care. You can rest easy knowing that we are committed to protecting your safety and the well-being of your family.
                    </p>
                  </div>
                  <div className="s-12 m-6 l-6">
                    <img src="assets/img/about-us-02.jpeg" alt=""/>
                    <h3 className="text-size-20 text-line-height-1 margin-top-30 text-center">Trusted. Certified. Guaranteed.</h3>
                    <p className="margin-top-30">
                      At MK Engineering Inc., we stand by the quality of our work with a full guarantee. From electrical design to installation and maintenance, our skilled professionals ensure every project meets the highest standards. With a commitment to prompt, courteous, and honest service, we complete your electrical work to your exact specifications, following all necessary requirements for your home or office. Contact us today for a free estimate from a trusted electrician in Toronto.
                    </p>
                  </div>
                </div>
              </div>      
            </div>
          </div> 
        </article>
      </main>
    )
  }
  
  export { AboutComponent }