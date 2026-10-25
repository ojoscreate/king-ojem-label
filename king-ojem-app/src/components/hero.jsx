import poster from '../assets/poster/dance.png';
import BackgroundVideo from '../assets/video/dancers.webm';
// import News from './news';
import Moment from '../assets/images/pristine.jpeg';
// import Logo from "./assets/king-ojem-label.png";
// import { useState } from "react";
function Hero( { innerRef /*, image*/ }) {
  // const [isClicked, setClicked] = useState(false)
  // const [isHome, setHome] = useState(false)
  // // Dynamic styling 
  // const dynamicstyle ={
  //   display: isClicked ? "block" : "none",
  //   // padding: "5%"
  // }
  // const homeStyle = {
  //   display: !isClicked ? "block" : "none",
  // }

  return (
    <>
     <div ref={innerRef} className="Video-wrapper">
      <video autoPlay loop muted playsInline className="background-video" poster={poster}>
        <source src={BackgroundVideo} type="video/mp4"/>
      </video>
      <div >
        <h1 className="heading"><a href='/'>Welcome, it's king ojem</a></h1>
      </div>
      
      <div className="video-overlay">
        <a href="#"  className="video-overlay-link">
        <div className="video-overlay-content">
          <h1 className='overlay-name'>King Ojem</h1>
          <h2 className='overlay-title'><span className="album_Head">P</span>RISTINE</h2>
          
        </div>
        <div >
          <img src={Moment} alt="Click for whats trending at the moment" className="moment blinkAnimation-Display" />
          {/* <News image={image}/> */}
        </div>
        </a>
      </div>
    </div>
    </>
 
  )
}

export default Hero;
