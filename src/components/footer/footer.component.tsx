const FooterComponent = () =>{
    return(
        <footer>
      {/* Contact Us */}
      <div className="background-primary padding text-center">
        <p className="h1">Contact Us: <a href="tel:+1647-982-7648">+1(647)-982-7648</a></p>                                                                        
      </div>

      {/* Main Footer */}
      <section className="background-dark full-width">
        {/* Map */}
        <div className="s-12 m-12 l-6 margin-m-bottom-2x">
          <div className="s-12 grayscale center">  	  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5764.753272187391!2d-79.58764579999999!3d43.744274999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3aedf3feac0b%3A0x25d38efa1f2047b1!2s45%20Silverstone%20Dr%20%231009%2C%20Etobicoke%2C%20ON%20M9V%204B1!5e0!3m2!1sen!2sca!4v1740707468600!5m2!1sen!2sca" width="100%" height="450" frameBorder="0"></iframe>
          </div>
        </div>

        {/* Collumn 2 */}
        <div className="s-12 m-12 l-6 margin-m-bottom-2x">
          <div className="padding-2x">
            <div className="line">              
              <div className="float-left">
                  <i className="icon-sli-location-pin text-primary icon3x"></i>
                </div>
                <div className="margin-left-70 margin-bottom-30">
                  <h3 className="margin-bottom-0">Company Address</h3>
                  <p><a href="https://g.co/kgs/feJ9mqB" target="_blank">1009 - 45 Silverstone Dr<br/>
                    Etobicoke ON M9V 4B1</a>
                  </p>               
                </div>
                <div className="float-left">
                  <i className="icon-sli-envelope text-primary icon3x"></i>
                </div>
                <div className="margin-left-70 margin-bottom-30">
                  <h3 className="margin-bottom-0">E-mail</h3>
                  <p><a href="mailto:info@mk-electric.ca">info@mk-electric.ca</a>
                  </p>              
                </div>
                <div className="float-left">
                  <i className="icon-sli-phone text-primary icon3x"></i>
                </div>
                <div className="margin-left-70">
                  <h3 className="margin-bottom-0">Phone Numbers</h3>
                  <p><a href="tel:+1647-982-7648">+1(647)-982-7648</a><br/>
                    <a href="tel:+1647-702-2404">+1(647)-702-2404</a>
                  </p>             
                </div>
            </div>
          </div>
        </div>  
      </section>
      <hr className="break margin-top-bottom-0" />

      {/* Bottom Footer
      <section className="padding background-dark full-width">
        <div className="s-12 l-6">
          <p className="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
          <p className="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
        </div>
        <div className="s-12 l-6">
          <a className="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding<br> by Responsee Team</a>
        </div>
      </section> */}
    </footer>
    )
}

export {FooterComponent}