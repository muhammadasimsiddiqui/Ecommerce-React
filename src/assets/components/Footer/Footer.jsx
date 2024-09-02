import React from 'react'
import Container from 'react-bootstrap/Container';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className='footer'>
            <Container>
            <div className='row'>
                <div className='col-md-3'>
                    <h2>LOGO</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptatibus laudantium est inventore fuga, aspernatur magni vel similique officiis voluptatem.</p>
                </div>
                <div className='col-md-3'>
                    <h2>Link</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h2>Categories</h2>
                    <ul>
                        <li>Category1</li>
                        <li>Category2</li>
                        <li>Category3</li>
                        <li>Category4</li>
                    </ul>
                </div>                
                <div className='col-md-3'>
                    <h2>Social Links</h2>
                <i className="fa-brands fa-facebook"></i>                
                </div>
                </div>

            </Container>
      </footer>
    </>
  )
}
