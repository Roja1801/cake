import React from 'react'
import Woman1 from '../images/woman1.jpg'
import Woman2 from '../images/woman2.jpg'
import './clients.css'

const Clients = () => {
    return (
        <div >

            <div id='reviews' className='clients'>
                <h1>Our Clients Say</h1>
                <div className='clients_sub'>
                    <div className='clients_sub_one'>
                        <div>
                            <img src={Woman1} height={150} width={150} alt="" />
                        </div>
                        <div>
                            <div className='space'>

                                <h5 className='clients_name'>Magdalena</h5>
                                <p className='date'>01.01.2022</p>
                            </div>
                            <p>I like these cakes.Always high quality and tasty sweets,which might sound like insanely high praise but really truth</p>
                        </div>
                    </div>
                    <div className='clients_sub_one'>
                        <div>
                            <img src={Woman2} height={150} width={150} alt="" />
                        </div>
                        <div className='clients_para'>
                            <div className='space'>

                                <h5 className='clients_name'>Kaisa Nohga</h5>
                                <p className='date'>01.01.2022</p>
                            </div>
                            <p>I like these cakes.Always high quality and tasty sweets,which might sound like insanely high praise but really truth</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Clients