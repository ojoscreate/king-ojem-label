import poster from '../assets/poster/dance.png';
import BackgroundVideo from '../assets/video/dancers.webm';
// import { useState } from "react";
function Hero() {
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
     <div className="Video-wrapper">
      <video autoPlay loop muted playsInline className="background-video" poster={poster}>
        <source src={BackgroundVideo} type="video/mp4"/>
      </video>
      <div >
        <h1 className="heading"><a href='/'>music, fashion, film</a></h1>
      </div>
      
    </div>
    </>
 
  )
}

export default Hero;
