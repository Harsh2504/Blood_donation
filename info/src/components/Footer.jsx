import React from 'react'
import './Footer.css'
import img2 from '../images/download.png'
import img3 from '../images/download3.png'
export const Footer = () => {
  return (

        
        <div className='footer'style={{color:"white", marginTop:"50px"}}>
            <div>© 2022 Company, Inc</div>
            <div >
                <img src={img2} alt="" className='img' />
                <img src={img3} alt="" className='img' />
            </div>
        </div>

  );
}
