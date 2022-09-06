import React from 'react'
import cakewel from '../images/cake_welcome.jpg'
import './welcome.css'
import logo from '../images/logo.jpg'
const Welcome = () => {
    return (
        <div id='aboutus'>
            <div className='header'>


                <div>
                    <p>Healthy cakes</p>
                    {/* <img className='logo' src={logo} height={75} width={75} alt="" /> */}
                </div>
                <div className='links'>
                    <a href="#aboutus">About us</a>
                    <a href="#ourCakes">Our Cakes</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </div>


            </div>
            <div className='welcome'>

                <div className='left'>
                    <div className='leftone'>
                        <h2>Healthy Cakes</h2>
                        <h5>Healthy cakes made from natural products</h5>
                        <h1>Healthy cakes in Krakow</h1>
                    </div>
                    <div className='lefttwo'>
                        <h3>Order now and get 15% discount with promocode HEALTHY</h3>
                        <p className='welcome_button'>Order Now</p>
                    </div>

                </div>
                <div className='right'>
                    <img src={cakewel} className='wel_img' alt="cake" />
                </div>
            </div>
        </div>
    )
}

export default Welcome