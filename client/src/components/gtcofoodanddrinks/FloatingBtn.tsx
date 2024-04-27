import React from 'react';
import styled from 'styled-components';
import { GiFallingLeaf } from "react-icons/gi";

const FloatingReviewButton = styled.div`
  position: fixed;
  bottom: 22rem;
  transition: 1s ease-in;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  &:hover {
    background-color: #0056b3; /* Adjust hover color as needed */
  }
`;

const ReviewIcon = styled(GiFallingLeaf)`
  color: #FF9916; 
  font-size: 24px;
`;

const FloatingReview = () => {
  const handleClick = () => {
    console.log('Write a review');
  };

  return (
    <FloatingReviewButton onClick={handleClick}>
      <ReviewIcon />
    </FloatingReviewButton>
  );
};

export default FloatingReview;
