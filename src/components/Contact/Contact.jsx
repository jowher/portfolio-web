import { FiPhoneCall, FiMail } from "react-icons/fi";
import { SlMap } from "react-icons/sl";
import "./ContactStyle.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_82go572', 'template_el2ij0d', form.current, 'NAawmkxMizwbn-30V')
      .then((result) => {
        console.log('send');
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="contact_wrapper" id="contact">
      <div className="contact_container container">
        <h2 className="heading">Contact</h2>

        <div className="row g-4 contact_box_container">
          <div className="col-lg-5">
            <div className="contact_left_box">
              <div className="contact_box">
                <div className="icon_box">
                  <FiMail className="icon" />
                </div>

                <span>ali.jowher4@gmail.com</span>
              </div>
              <div className="contact_box">
                <div className="icon_box">
                  <SlMap className="icon" />
                </div>

                <span>Buffalo, NewYork</span>
              </div>
              <div className="contact_box">
                <div className="icon_box">
                  <FiPhoneCall className="icon" />
                </div>

                <span>+1 716-910-1992</span>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
               {/* <input type="submit" value="Send" /> */}
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
