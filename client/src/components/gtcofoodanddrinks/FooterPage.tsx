import React from 'react'
import styled from 'styled-components'
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import styles from '../../styles/Home.module.css';
import { LocationContainer, contries, currencies } from '../Global/footer-styles';
const FooterContainer = styled.div`
width: 500px;
padding: 44px 23px 44px 23px;
display: flex;
flex-direction:column;
gap: 28px;
max-width: 109%;
height: 500px;
text-align: center;
justify-content: center;
background: #333333
`
const Footer = () => {
  return (
<FooterContainer>
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <img src='/images/hightablelogo.png' width={188} height={48}/>
    </div>
       <p
       style={{
        color: '#FFF4E7',
        fontSize:'15px',
        fontWeight: '300',
        fontFamily: 'Monteserrat',
       }}
       >&copy; {new Date().getFullYear()} HighTable LLC All rights reserved</p>
       <div style={{
        width: '318px',
        height: '33px',
        display: 'flex',
        justifyContent: 'space-between'
       }}>
        <LocationContainer>
              <select className={styles.footerLocationLeft} name="select">
                {currencies.map((item:any) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              <select className={styles.footerLocationRight} name="select">
                {contries.map((item:any) => (
                  <option key={item.title} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </LocationContainer>
       </div>
         <div style={{
             width: '318px',
             height: '33px',
             display: 'flex',
             justifyContent: 'space-between',
             marginTop: '50px',
             marginLeft: '45px'
         }}>
         <AiOutlineFacebook color='white' size={46} />
         <IoLogoInstagram color='white' size={46}/>
         <FaXTwitter color='white' size={46}/>
         <CiLinkedin color='white' size={46} />
         </div>
    </FooterContainer>
    
  )
}

export default Footer