import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import HeroImg from '/banner/Hero.jpg'
import './Hero.css'



export default function Hero() {
  return (
    <>   
           <Container fluid className='HeroSection'>
                <Container >
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-start text-start align-items-center">
                        <h6>Trade-In-Offer</h6>
                        <h2>
                        Supper Value Deals
                        On All Products
                        </h2>
                        <h6>Save More With Coupons & Upto 70% Off</h6>
                        <Button variant="dark">Shop Now</Button>
                    </div>
                    <div className="col-md-6 Hero-Img d-flex justify-content-center align-items-center" >
                        <img src={HeroImg}/>
                    </div>
                </div>
                </Container>
          </Container>
    </>
  )
}
