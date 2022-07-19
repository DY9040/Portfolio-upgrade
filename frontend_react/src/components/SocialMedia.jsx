import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://www.linkedin.com/in/david-young-16023617a/">
            <BsLinkedin
            />
        </a>
        </div>
        <div>
        <a href="https://www.facebook.com/ForeverY2566/">
            <FaFacebook />
        </a>
        </div>
        <div>
          <a href="https://github.com/DY9040">
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia