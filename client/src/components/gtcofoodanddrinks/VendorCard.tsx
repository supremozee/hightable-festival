import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import StarRating from './StarRating';

const VendorCardWrapper = styled.div`
width: 255px;
height: 303px;
 display: flex;
 overflow: hidden;
 flex-direction: column;
 gap: 5px;
 & h2 {
    font-weight: 700;
    font-size: 12px;
    color: #333333;
 }
 & div {
    display: flex;
    width: 80%;
    align-items: center;

 }
 & p {
    font-size: 12px;
    font-family: Monteserrat;
    color: #666670;
 }
`
export const VendorCard = ({
    image,
     title,
      description, 
      username, 
      rateNumber,
      instagram
    }: {
        image:string,
     title:string,
      description:any, 
      username:string, 
      rateNumber:number,
      instagram:string
    }) => {
  return (
    <VendorCardWrapper>
        <Image
        src = {image}
        alt = "Vendors"
        width = {253}
        height={146}
        />
        <h2>{title}</h2>
        <div><StarRating count={5} value={5}/> <span>{rateNumber}Ratings</span></div>
        <p>
            {description}
        </p>
        <Link href={instagram}><FaInstagram size={20} color='red' style={{marginRight: '10px'}} /> {username}</Link>
    </VendorCardWrapper>
    )
}