import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import image from '../../../images/junaid/junaid2.jpg'

const Footer = () => {
    return (
            <footer className="footer bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-purple-800 hover:text-purple-700 border-t-0 bg-inherit justify-evenly p-10 bg-neutral">
                <div>
                    <img className='h-20 mx-auto rounded-full w-20' src={image} alt="" />
                    <p>Junaid Ahamed Jesan<br />Frontend Developer</p>
                </div>
                <div>
                    <span className="footer-title text-purple-900">Social</span>
                    <div className="grid grid-flow-col gap-4 text-gray-800">
                        <li><a href="https://github.com/junaidjesan"><BsGithub className='h-7 w-7'/>GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/junaidjesan2/"><AiOutlineLinkedin className='h-7 w-7'/>LinkedIn</a></li>
                        <li><a href="https://www.facebook.com/junaidjesan2"><BsFacebook className='h-7 w-7'/> Facebook</a></li>
                        <li><a href="https://www.instagram.com/junaidjesan2/?next=%2F"><AiOutlineInstagram className='h-7 w-7'/> Instragram</a></li>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;