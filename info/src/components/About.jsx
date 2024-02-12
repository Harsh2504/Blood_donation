import React from 'react'
import './About.css';
export const About = () => {
    return (
        <div className='about container mt-4 mb-4'>
            <div className='about-header'>About Us</div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYXxE2QkVqMVkJrkDrq8udWcfOioKrDisig&usqp=CAU'/>
                <br/>
                was Inaugurated on 7th April 2016 by Hon'ble Minister of Health and Family Welfare, Sh. J P Nadda.

                e-Rakt Kosh enforces Drug & Cosmetic Act, National blood policy standards and guidelines ensuring proper collection & donation, effective management and monitoring the quality and quantity of the donated blood. Considering the national roll out, e-Rakt Kosh has been developed with modular and scalable approach with configurable rule based architecture allowing customization to easily incorporate specific requirements from nationwide stakeholders.
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30572.8110802385!2d74.18362717431636!3d16.69681900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000b173d2feb%3A0xba8fd2874d959795!2sKolhapur%20Municipal%20Corporation%20Blood%20Bank!5e0!3m2!1sen!2sin!4v1707733889313!5m2!1sen!2sin" width="600" height="450" style={{border:"0px", marginLeft:"300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
