import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi"
import Image from 'next/image'
import { SignUpButton } from './SignUpButton'
import SigningUpModal from './SignUpModal'
const HeaderContainer = styled.div`
margin: 20px;
display: flex;
width: 100%;
max-width: 100%;
height: 32.08px;
justify-content: space-between;
box-sizing: border-box;
& div {
    display: flex;
    gap: 33px;
    align-items: center
}
`
const GTCOHeader = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = ()=> {
    setOpenModal((prev)=> !prev)
  }
  return (
    <HeaderContainer>
        <div>
        <GiHamburgerMenu />
      <Image
       src="/images/highlogo.svg"
       alt="Hightable"
       width= {100}
       height={32}
        />
        </div>
        <SignUpButton onClick={handleOpen}/>
        {openModal && <SigningUpModal toggleModal={handleOpen} isOpen={openModal}/>}
    </HeaderContainer>
  )
}

export default GTCOHeader