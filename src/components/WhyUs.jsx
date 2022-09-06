import React from 'react'
import CakeWoman from '../images/cake_woman.jpg'
import './whyUs.css'
import CakeIcon from '../images/cake_icon.png'
const WhyUs = () => {
    return (
        <div className='why_us'>
            <div className='why_us_left'>
                <h1>Why People Choose Us</h1>
                <div className='why_us_pg'>
                    <div className='pgs'>

                        <img src={CakeIcon} alt="" />
                        <p>If you are a bodybuilder, adding a piece of cake to your pre-workout meal may help you reach your goals faster!</p>
                    </div>

                    <div className='pgs'>

                        <img src={CakeIcon} alt="" />

                        <p>Feeling tired after a long day of work but still, need to run errands when you get home? Consuming some cake or bringing a cupcake with you on the road will give you the energy you need to get through the rest of the day!</p>
                    </div>
                    <div className='pgs'>

                        <img src={CakeIcon} alt="" />

                        <p>Besides the milk and eggs, flour and sugar are the main ingredients in a cake, which are excellent sources of carbohydrates which do provide your body, brain, and muscles with energy. </p>
                    </div>
                    <div className='pgs'>

                        <img src={CakeIcon} alt="" />

                        <p>As long as you don't overdo it, you will get a healthy boost of energy to help keep you awake.</p>
                    </div >
                </div>

            </div>
            <div className='why_us_right'>
                <img src={CakeWoman} className='why_us_img' alt="woman with cake" />
            </div>
        </div>
    )
}

export default WhyUs