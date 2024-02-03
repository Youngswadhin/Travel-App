import React, {useEffect} from 'react'
import '../StyleShet/Footer.css'
import img from '../Assets/drone.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'


import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'

const Footer = ()  => {

   //Lets create a react hook to add a scroll animation......
   useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='footer'>
      <div className='imgDiv'>
        <img src={img} alt='footer' />
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KKEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos='fade-up' type='text' placeholder='Enter Email Address' />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='/' className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos='fade-up' className='footerParagraph'>
            Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
            </div>

            <div data-aos='fade-up' className='footerSocials flex'>
            <AiFillLinkedin className='icon'/>
            <AiFillGithub className='icon'/>
            <AiOutlineInstagram className='icon'/>
            </div>
          </div>

          <div data-aos='fade-up' className='footerLinks grid'>
            {/* Group One */}
            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup'>
              <span className='grouppTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>
            {/* Group Two */}
            <div data-aos='fade-up' data-aos-duration='4000' className='linkGroup'>
              <span className='grouppTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>
            {/* Group Three */}
            <div data-aos='fade-up' data-aos-duration='5000' className='linkGroup'>
              <span className='grouppTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Ladakh
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Maldives
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Odisha
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Goa
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rajsthan
              </li>
            </div>

          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - SWADHIN KUMAR ❤️</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer