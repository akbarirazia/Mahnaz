import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import Aos from 'aos';


const HeaderSocials = () =>{
    return(
        <div className="header__socials">
       <a className='btn socials__a' data-aos="fade-left" data-aos-delay="500" href="https://www.linkedin.com/in/mahnaz-faizi-038795202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><BsLinkedin/></a>  
     <a className='btn socials__a' data-aos="fade-left" data-aos-delay="700" href="https://github.com/Mahnazfaizi" target="_blank"><FaGithub/></a>
       <a className='btn socials__a' data-aos="fade-left" data-aos-delay="900" href="https://twitter.com/mahnaz_faizi?t=1GWuN2fnDNHu9w1QH9RrNA&s=35" target="_blank"><FaTwitter/></a> 
        </div>
    )
}
export default HeaderSocials;