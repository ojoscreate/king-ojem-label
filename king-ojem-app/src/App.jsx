// omports of dependencies
import { useInView } from "react-intersection-observer";

// imports of Components
import Nav from './components/nav'
import Hero from './components/hero'
import Music from './components/music'
import Slider from './components/slider'
import News from './components/news'
import Contact from './components/contact'

// import of styles
import './App.css'

// import of image file
import imageOne from "./assets/images/images (4).jpeg";
import imageTwo from "./assets/images/images (5).jpeg";
import imageThree from "./assets/images/imageScene.jpg";
import poster from './assets/poster/dance.png';
import BackgroundVideo from './assets/video/dancers.webm';


const imagesobj = [
  { id: 1, image: imageOne, parag: "Seaveiw" },
  { id: 2, image: imageTwo, parag: "beachview"  },
  { id: 3, image: imageThree, parag: "Lakeview"  },
  { id: 5, video: BackgroundVideo, parag: "Watch more", poster:poster  },
  { id: 6, image: imageThree, parag: "Lakeview"  },
  { id: 7, video: BackgroundVideo, parag: "Watch more", poster:poster, image: imageThree  }

  

];
const videoData = [
  { id: 4, video: BackgroundVideo, parag: "Watch more", poster:poster, image: imageThree  },
   { 
    id: 1, 
    video: "https://youtube.com", 
    parag: "Watch more", 
    poster: "nature-drone-poster.jpg" 
  },
  { 
    id: 2, 
    video: "https://youtube.com", 
    parag: "Watch more", 
    poster: "mountain-lake-poster.jpg" 
  },
  { 
    id: 3, 
    video: "https://youtube.com", 
    parag: "Watch more", 
    poster: "archival-vintage-poster.jpg" 
  },


  

];


function App() {
    const { ref: heroRef, inView: heroIsVisible } = useInView({
    threshold: 0.8,
  });

  const isScrolled = !heroIsVisible;
  

  return (
    <>
      <Nav isScrolled={isScrolled}/>
      <Hero innerRef={heroRef} image={[imageOne, imageTwo, imageThree]} />
      <Music name="music" />
      <Slider images={videoData} name="videos" />
      <News image = {[imageOne, imageTwo, imageThree]} />
      <Slider images={imagesobj} name="tour" />
      <Contact />
    </>
  )
}

export default App