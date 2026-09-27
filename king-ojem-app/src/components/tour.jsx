import { useState } from "react";
import imageOne from "../assets/images/images (4).jpeg";
import imageTwo from "../assets/images/images (5).jpeg";
import imageThree from "../assets/images/imageScene.jpg";
import poster from '../assets/poster/dance.png';
import BackgroundVideo from '../assets/video/dancers.webm';


const images = [
  { id: 1, image: imageOne, parag: "Seaveiw" },
  { id: 2, image: imageTwo, parag: "beachview"  },
  { id: 3, image: imageThree, parag: "Lakeview"  },
  { id: 5, video: BackgroundVideo, parag: "Watch more", poster:poster  },
  { id: 6, image: imageThree, parag: "Lakeview"  },
  { id: 7, video: BackgroundVideo, parag: "Watch more", poster:poster, image: imageThree  }

  

];

function ImageSlider({ images }) {
  const [slideIndex, setSlideIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p>No images available.</p>;
  }

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    // setTimeout(slideIndex, 200)
  };

  return (
    <div className="slider">
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`slides ${slideIndex === index ? "display-slider" : ""}`}
          aria-label={`Slide ${index + 1}`}
        >
          {item.video?   <video autoPlay loop muted playsInline className="slider-video" poster={item.poater}>
                  <source src={item.video} type="video/mp4"/>
                </video>:<img src={item.image} alt={`Tour slide ${index + 1}`} className="slide-image" />}
          
          <p><a href="/" >{item.parag}</a> </p>
        </div>
        
      ))}

      <button className="prev" onClick={prevSlide} onc type="button" aria-label="Previous image">
        &#10094;
      </button>
      <button className="next" onClick={nextSlide} type="button" aria-label="Next image">
        &#10095;
      </button>
    </div>
  );
}

function Tour() {
  return (
    <>
      <h1>Tour Dates</h1>
      <ImageSlider images={images} />
    </>
  );
}

export default Tour;