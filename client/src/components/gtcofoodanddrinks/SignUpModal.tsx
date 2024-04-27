import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpPage from './SignUpVendor';

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
display: ${({ isOpen }: {isOpen:any}) => (isOpen ? 'flex' : 'none')};
justify-content: center;
z-index: 999; 
transition: 1s ease in;
`;

const ModalContent = styled.div`
position: fixed;
bottom: 0;
left: 0;
margin-bottom: 25rem;
margin-left: 5rem;
width: 70%;
background-color: white;
padding: 20px;
z-index: 999; 
transition: 3s ease-in;
transform: translateY(${({ isOpen }: {isOpen:any}) => (isOpen ? '0' : '100%')});
@media only screen and (max-width: 390px) {
    width: 340px; 
    margin-top: 40px;
    height: auto;
  margin-bottom: 8rem;
  margin-left: 2rem;
  }
`;

const SigningUpModal = ({ isOpen, toggleModal }: { isOpen: boolean; toggleModal: () => void }) => {
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={toggleModal} />
      <ModalContent isOpen={isOpen}>
        <SignUpPage />
      </ModalContent>
    </>
  );
};

export default SigningUpModal;
