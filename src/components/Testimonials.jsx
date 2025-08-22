import React, { useRef } from 'react';
import './TestimonialSlider.css';
import IMAGE from '../assets/ac.jpg';

const testimonials = [
    {
    name: 'AL AAS BIN ASHIQ',
    location: 'ISB,PAK',
    image: IMAGE,
    message: 'Edusity has transformed my academic journey. The faculty support and campus resources are incredible.'
  },
  {
    name: 'Emily Williams',
    location: 'Edusity, USA',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    message: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state–of–the–art facilities, and commitment to academic excellence have truly exceeded my expectations.'
  },
  {
    name: 'William Jackson',
    location: 'Edusity, USA',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    message: 'Choosing to pursue my degree at Edusity was one of the best decisions I\'ve ever made. The supportive community, state–of–the–art facilities, and commitment to academic excellence have truly exceeded my expectations.'
  },
  
  {
    name: 'James Smith',
    location: 'Edusity, USA',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    message: 'The learning experience at Edusity is top-notch. I feel prepared for the real world.'
  }
];

const TestimonialSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 660;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <h4>TESTIMONIALS</h4>
      <h2>What Student Says</h2>

      <div className="slider">
        <button className="nav left" onClick={() => scroll('left')}>&#8592;</button>

        <div className="cards-container" ref={scrollRef}>
          {testimonials.map((testimonial, index) => (
            <div className="card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="location">{testimonial.location}</p>
              <p className="testimonial">{testimonial.message}</p>
            </div>
          ))}
        </div>

        <button className="nav right" onClick={() => scroll('right')}>&#8594;</button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
