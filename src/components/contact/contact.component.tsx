const ContactComponent = () => {
    return (
        <main role="main">
        {/*<!-- Content -->*/}
        <article>
          <header className="section background-dark">
            <div className="line">
              <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">Contact Us</h1>
              <p className="margin-bottom-0 text-size-16">Do you have any queries or feedback regarding MK's offerings? It's a
                pleasure to talk to you. To further assist you, please use the contact details provided above.
            </p></div>
          </header>
          <div className="section background-white">
            <div className="line margin-bottom-60">
              <div className="margin">
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-location-pin icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0">
                      <h3 className="margin-bottom-0">Company Address</h3>
                      <p><a href="https://g.co/kgs/feJ9mqB" target="_blank">1009 - 45 Silverstone Dr.<br/>Etobicoke ON M9V
                          4B1</a></p>
                    </div>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-envelope icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0">
                      <h3 className="margin-bottom-0">E-mail</h3>
                      <p><a href="mailto:info@mk-electric.ca">info@mk-electric.ca</a><br/> <span className="background-wht">Test</span></p>
                    </div>
                  </div>
                </div>
                <div className="s-12 m-12 l-4 margin-m-bottom">
                  <div className="padding-2x block-bordered border-radius">
                    <div className="float-left hide-s">
                      <i className="icon-sli-phone icon3x text-primary"></i>
                    </div>
                    <div className="margin-left-70 margin-s-left-0">
                      <h3 className="margin-bottom-0">Phone Numbers</h3>
                      <p><a href="tel:+1647-982-7648">+1 647 982 7648</a></p>
                      <p><a href="tel:+1647-702-2404">+1 647 702 2404</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="line">
              <div className="margin">
                {/*<!-- Contact Form -->*/}
                <div className="s-12 m-12 l-6">
                  <h2 className="margin-bottom-10">Leave Message</h2>
                  <form name="contactForm" className="customform" method="post">
                    <div className="line">
                      <div className="margin">
                        <div className="s-12 m-12 l-6">
                          <input name="email" className="required email" placeholder="Your e-mail" title="Your e-mail" type="text"/>
                          <p className="email-error form-error">Please enter your e-mail.</p>
                        </div>
                        <div className="s-12 m-12 l-6">
                          <input name="name" className="name" placeholder="Your name" title="Your name" type="text"/>
                          <p className="name-error form-error">Please enter your name.</p>
                        </div>
                      </div>
                    </div>
                    <div className="s-12">
                      <input name="subject" className="subject" placeholder="Subject" title="Subject" type="text"/>
                      <p className="subject-error form-error">Please enter the subject.</p>
                    </div>
                    <div className="s-12">
                      <textarea name="message" className="required message" placeholder="Your message"></textarea>
                      <p className="message-error form-error">Please enter your message.</p>
                    </div>
                    <div className="s-12"><button className="s-12 submit-form button background-primary text-white" type="submit">Submit</button></div>
                  </form>
                </div>
                <div className="s-12 m-12 l-4">
                  <h2 className="margin-bottom-10">Office Hours</h2>
                  <div className="s-6">
                    <p className="text-size-16">
                      Monday<br/>
                      Tuesday<br/>
                      Wednesday<br/>
                      Thursday<br/>
                      Friday<br/>
                      Saturday<br/>
                      Sunday
                    </p>
                  </div>
                  <div className="s-6">
                    <p className="text-size-16 text-strong">
                      08.00 AM - 16.00 PM<br/>
                      08.00 AM - 16.00 PM<br/>
                      08.00 AM - 16.00 PM<br/>
                      08.00 AM - 16.00 PM<br/>
                      08.00 AM - 16.00 PM<br/>
                      Closed<br/>
                      Closed
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
export { ContactComponent }