import React, {useRef} from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from'emailjs-com'

const Contact = () => {

  const form= useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5bp9u4i', 'template_n6xm8r9', form.current, 'GtjE7twlk1wDdPD09')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  const contactMethods = [
    {
      icon: <MdOutlineEmail />,
      title: 'Email',
      details: 'axelpicaut@orange.fr',
      link: 'mailto:picaut.axel03@gmail.com',
    },
    {
      icon: <RiMessengerLine />,
      title: 'Messenger',
      details: 'Axel Picaut',
      link: 'https://m.me/axwell.shefield',
    },
    {
      icon: <BsWhatsapp />,
      title: 'WhatsApp',
      details: '+33 7 60 66 27 82',
      link: 'https://api.whatsapp.com/send?phone=33760662782',
    },
  ];

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          {contactMethods.map((method, index) => (
            <article className='contact_option' key={index}>
              <div className="contact_option-icon">
              {method.icon}
              </div>
              <h4>{method.title}</h4>
              <h5>{method.details}</h5>
              <a href={method.link} target='_blank' rel='noreferrer'>
                Send A Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' ></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
