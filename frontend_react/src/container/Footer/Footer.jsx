import React,  { useState } from 'react';

import  { images } from '../../constants';
import { AppWrap, MotionWrap }   from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'

function Footer() {
  const [formData, setFormData] = useState({ name: '', email:'', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact ={
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    }
    client.create(contact)
    .then(() => {
      setLoading (false);
      setIsFormSubmitted(true);
  })
  .catch(err => console.log(err));
  };

  return (
    <>
    <h2 className="head-text">Contact Me </h2>

    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="Email" />
        <a href="mailto:dy9040@gmail.com" className="p-text">Dy9040@gmail.com</a>
        </div>
        <div className="app__footer-card">
        <img src={images.mobile} alt="Mobile" />
        <a href="tel:(832) 800-3678" className="p-text">(832) 800-3678</a>
        </div>
    </div>

    {!isFormSubmitted ? (
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input className="p-text" type="text" placeholder="Your Name" name=" username" value={username} onChange={handleChangeInput} />
        <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
      </div>
      <div>
        <textarea
          className="p-text"
          placeholder="Your Message"
          name="message"
          value={message}
          onChange={handleChangeInput}
          />
      </div>
      <button  type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    ) : ( 
    <div>
      <h3 className="head-text"> 
      Thank you for getting in touch!
      </h3>
    </div>
    )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);