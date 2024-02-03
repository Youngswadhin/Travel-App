import React, {useEffect} from "react";
import "../StyleShet/Home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  //Lets create a react hook to add a scroll animation......
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  
  return (
    <section className="home">
      <div className="homeContent container">
        <div className="textDiv">
          <spanocial data-aos='fade-up' className="smallText">Our Packages</spanocial>
          <h1 data-aos='fade-up' className="homeTitle">Search your Holiday</h1>
        </div>

        <div data-aos='fade-up' className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination: </label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dataInput">
            <label htmlFor="data">Select your date: </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price: </label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>


          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>

        </div>

        <div data-aos='fade-up'  className="homeFooterIcons flex">
          <div className="rightIcons">
            <AiFillLinkedin className='icon'/>
            <AiFillGithub className='icon'/>
            <AiOutlineInstagram className='icon'/>
          </div>
          <div className="leftIcons"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
