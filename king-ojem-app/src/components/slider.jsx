import { useState } from "react";


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
        <span className="slider-btn">&#10094;</span>
      </button>
      <button className="next" onClick={nextSlide} type="button" aria-label="Next image">
         <span className="slider-btn">&#10095;</span>
      </button>
    </div>
  );
}

function Slider({images, name}) {
  return (
    <>
    <div className="between_tabs" id={name}>
            <h1>{name}</h1>
      <ImageSlider images={images} />
    </div>

    </>
  );
}

export default Slider;