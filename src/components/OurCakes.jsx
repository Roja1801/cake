import React from 'react'
import Rasp from '../images/raspberry.jpg'
import Straw from '../images/strawberry.jpg'
import Blue from '../images/blueberry.jpg'
import './ourCakes.css'
const OurCakes = () => {
    return (

        <div id='ourCakes'>
            <div className='ourCakes_heading'>

                <h1>Our Cakes</h1>
            </div>
            <div className='ourCakes'>

                <div className='ourCakes_sub'>
                    <img src={Rasp} height={300} className='ourCakes_img' width={300} alt="" />
                    <h3>RASPBERRY CAKE</h3>
                    <p>Extremely delicious summer cake with the taste of swet and juicy raspberry accompanied by homemade red fruit jam will delight all guests on every special occasion</p>
                    <div className='ourCakes_button'>ORDER NOW</div>
                </div>
                <div className='ourCakes_sub'>
                    <img src={Straw} height={300} width={300} className='ourCakes_img' alt="" />
                    <h3>STRAWBERRY CAKE</h3>
                    <p>Extremely delicious summer cake with the taste of swet and juicy strawberry accompanied by homemade red fruit jam will delight all guests on every special occasion</p>
                    <div className='ourCakes_button'>ORDER NOW</div>
                </div>
                <div className='ourCakes_sub'>
                    <img src={Blue} height={300} width={300} className='ourCakes_img' alt="" />
                    <h3>BLUEBERRY CAKE</h3>
                    <p>Extremely delicious summer cake with the taste of swet and juicy blueberry accompanied by homemade red fruit jam will delight all guests on every special occasion</p>
                    <div className='ourCakes_button'>ORDER NOW</div>
                </div>
            </div>
        </div>
    )
}

export default OurCakes