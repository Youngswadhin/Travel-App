import React, {useEffect} from "react";
import '../StyleShet/Main.css'


// import icons here
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


import Aos from 'aos'
import 'aos/dist/aos.css'

//import image here
import img from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'
import img9 from '../Assets/img9.jpg'

// let me paste the array named data

const data = [
  {
    id:1,
    imgSrc:img,
    destTitle: 'Sarala Village',
    location: 'Odisha',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle: 'Deomali',
    location: 'Odisha',
    grade: 'ULTURAL RELAX',
    fees: '$600',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:3,
    imgSrc:img3,
    destTitle: 'Dudhwa',
    location: 'Uttar Pradesh',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:4,
    imgSrc:img4,
    destTitle: 'Sundarbans',
    location: 'West Bengal',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:5,
    imgSrc:img5,
    destTitle: 'Radhanagar Beach',
    location: 'Havelock Island',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:6,
    imgSrc:img6,
    destTitle: 'Chillika',
    location: 'Odisha',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:7,
    imgSrc:img7,
    destTitle: 'Addu Atoll',
    location: 'Maldives',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:8,
    imgSrc:img8,
    destTitle: 'Similipal',
    location: 'Odisha',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },
  {
    id:9,
    imgSrc:img9,
    destTitle: 'Went Jaintia Hills',
    location: 'Meghalaya',
    grade: 'ULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activitues.'
  },

]

const Main = () => {

    //Lets create a react hook to add a scroll animation......
    useEffect(()=>{
      Aos.init({duration: 2000})
    },[])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {/* here i use high order array method(map). to do that i use a list of object in one array.  */}
{
  data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
    return(
      <div key={id} data-aos='fade-up'  className="singleDestination">
        {/* here it will return single id from the map array */}
        <div className="imageDiv">
        <img src={imgSrc} alt="YOUNG" />
        </div>

        <div className="cardInfo">
          <h4 className="destTitle">{destTitle}</h4>
          <span className="continent flex">
            <HiOutlineLocationMarker className="icon" />
            <span className="name">{location}</span>
          </span>

          <div className="fees flex">
            <div className="grade">
              <span>{grade}<small> +1</small></span>
            </div>
            <div className="price">
              <h5>{fees}</h5>
            </div>
          </div>

          <div className="desc">
            <p>{description}</p>
          </div>

          <button className="btn flex">
            DEATILS <HiOutlineClipboardCheck className='icon' />
          </button>
        </div>
      </div>
          
      
    )
  })
}


      </div>
    </section>
  );
}

export default Main;
