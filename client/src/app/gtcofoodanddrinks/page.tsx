"use client"
import React from 'react'
import MobileOnlyWrapper from './WithMobileOnly'
import GTCOHeader from '../../components/gtcofoodanddrinks/Header'
import { VendorsSection } from '../../components/gtcofoodanddrinks/VendorsComponent'
import ReviewsSection from '../../components/gtcofoodanddrinks/ReviewsSection'
import Category from '../../components/gtcofoodanddrinks/category'
import Activity from '../../components/gtcofoodanddrinks/activity'
import Footer from '../../components/gtcofoodanddrinks/FooterPage'
import FloatingReview from '../../components/gtcofoodanddrinks/FloatingBtn'
import HeroSection from '@/components/gtcofoodanddrinks/Hero'

const GTCOFOODANDDRINKS = () => {
  return (
    <MobileOnlyWrapper>
        <FloatingReview/>
        <GTCOHeader/>
        <HeroSection/>
        <VendorsSection/>
        <ReviewsSection/>
        <Category/>
        <Activity/>
        <Footer/>
    </MobileOnlyWrapper>
  )
}

export default GTCOFOODANDDRINKS