import React from 'react'
import map from '../images/map.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'

import './contacts.css'
const Contacts = () => {
    return (
        <div id='contact' className='contacts_heading'>
            <h1>Contact</h1>
            <div className='contacts'>

                <div className='contacts_left'>

                    <div className='contacts_sub'>
                        <h3>Address</h3>
                        <p>Poland,Krakow,Krzwdo str,17</p>
                    </div>
                    <div className='contacts_sub'>
                        <h3>E-Mail</h3>
                        <a href="healthy_cakes@gmail.com">healthy_cakes@gmail.com</a>
                    </div>
                    <div className='contacts_sub'>
                        <h3>Phone</h3>
                        <p>+487602265</p>
                    </div>
                    <div className='contacts_sub'>
                        <h3>Working time</h3>
                        <p>daily from 9.00 to 18.00</p>
                    </div>

                </div>
                <div className='contacts_img'>
                    <img src={map} alt="map" height={500} width={700} />
                </div>

            </div>
            <div className='footer'>
                <h2>©Healthy cakes</h2>
                <div className='social_media'>
                    <img src={facebook} height={50} width={50} alt="" />
                    <img src={instagram} height={50} width={50} alt="" />
                    <img src={youtube} height={50} width={50} alt="" />


                </div>

            </div>

        </div>
    )
}

export default Contacts