"use client"
import React from 'react'
import styled from 'styled-components'
import { VendorCard } from './VendorCard'

const VendorWrapper = styled.div`
display:flex;
flex-direction: column;
width: 100%;
margin: 20px;
gap: 6px;
& h1 {
    font-size: 28px;
    font-weight: semibold;
    font-family: Cambon;
    color: #333333;
}
& h5 {
    color: #FF9916;
    font-size: 19px;
    font-family: Monteserrat;
    width: 100%;
    text-align: end;
}
`
const VendorSwiper = styled.div`
display: flex;
overflow-x: scroll;
gap: 20px;
`

const Vendors = [
    {
        image: "/images/mamajoy.svg",
        title: "Bee4dawn Cocktails",
        rateNumber: 85,
        instagram: "",
        description: "I feel like this shawarma had so much spice in it at least the one I ate, too much onions and it was quite greasy,please look into that.",
        username: "@bee4dawn_cocktails"
    },
    {
        image: "/images/mamajoy.svg",
        title: "Bekiri Co",
        rateNumber: 85,
        instagram: "",
        description: "I feel like this shawarma had so much spice in it at least the one I ate, too much onions and it was quite greasy,please look into that.",
        username: "@bekiri.co"
    },
    {
        image: "/images/mamajoy.svg",
        title: "Bixby's Cakes & More",
        rateNumber: 85,
        instagram: "",
        description: "I feel like this shawarma had so much spice in it at least the one I ate, too much onions and it was quite greasy,please look into that.",
        username: "@bixbyscakesandmore"
    }
]


export const VendorsSection = () => {
  return (
    <VendorWrapper>
        <h1>Vendor</h1>
        <VendorSwiper>
        { Vendors.map((vendor, i)=> {
            return (
                <div key={i}>
                <VendorCard image={vendor.image} 
                title={vendor.title}
                rateNumber={vendor.rateNumber}
                description={vendor.description}
                username={vendor.username}
                instagram='/'
                />
                </div>
            )
        })
            }
        </VendorSwiper>
        <h5> See More ...</h5>
    </VendorWrapper>
  )
}