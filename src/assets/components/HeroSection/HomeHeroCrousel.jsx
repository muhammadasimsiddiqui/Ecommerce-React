import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomeHeroCarousel.css';

export default function HomeHeroCarousel() {
  return (
    <Carousel >
      <Carousel.Item style={{ height: '100dvh' }}>
        <img
          className="d-block w-100"
          src="/banner/1.jpg"
          alt="First slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '100dvh' }}>
        <img
          className="d-block w-100"
          src="/banner/2.jpg"
          alt="Second slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: '100dvh' }}>
        <img
          className="d-block w-100"
          src="/banner/3.jpg"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
        <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100">
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
