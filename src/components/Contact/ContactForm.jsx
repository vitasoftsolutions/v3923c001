import { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2560p7g",
        "template_nkqwfsi",
        form.current,
        "0u5wVZv6KJ1cBUPdV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {/* <!-- Contact Start --> */}
      <div className="section techwix-contact-section techwix-contact-section-02 techwix-contact-section-03 section-padding-02">
        <div className="container">
          {/* <!-- Contact Wrap Start --> */}
          <div className="contact-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* <!-- Contact Form Start --> */}
                <div className="contact-form">
                  <div className="contact-form-wrap">
                    <div className="heading-wrap text-center">
                      <span className="sub-title"> request a quote</span>
                      <h3 className="title">How May We Help You!</h3>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row">
                        <div className="col-sm-6">
                          {/* <!-- Single Form Start --> */}
                          <div className="single-form">
                            <input
                              type="text"
                              name="user_name"
                              placeholder="Name *"
                            />
                          </div>
                          {/* <!-- Single Form End --> */}
                        </div>
                        <div className="col-sm-6">
                          {/* <!-- Single Form Start --> */}
                          <div className="single-form">
                            <input
                              type="email"
                              name="user_email"
                              placeholder="Email *"
                            />
                          </div>
                          {/* <!-- Single Form End --> */}
                        </div>
                        <div className="col-sm-12">
                          {/* <!-- Single Form Start --> */}
                          <div className="single-form">
                            <input type="text" placeholder="Subject *" />
                          </div>
                          {/* <!-- Single Form End --> */}
                        </div>
                        <div className="col-sm-12">
                          {/* <!-- Single Form Start --> */}
                          <div className="single-form">
                            <label>Message*</label>
                            <textarea
                              name="message"
                              placeholder="Write A Message"
                            />
                          </div>
                          {/* <!-- Single Form End --> */}
                        </div>
                        <div className="col-sm-12">
                          {/* <!--  Single Form Start --> */}
                          <div className="form-btn">
                            <button className="btn" type="submit" value="Send">
                              Send Message
                            </button>
                          </div>
                          {/* <!--  Single Form End --> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <!-- Contact Form End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Contact Wrap End --> */}
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </div>
  );
}

export default ContactForm;
