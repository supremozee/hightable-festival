import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const ActivityContent = styled.div`
width: 100%;
display: flex;
gap: 15px;
overflow: hidden;
overflow-x: scroll;
margin: 16px;
height: 100%;
scrollbar-width: none;

`
const ActivityWrapper = styled.div`
margin: 100px 24px 0 16px;
height: 200px;
width: 100%;
margin-bottom: 10rem;
& h1 {
    font-size: 21px;
    font-weight: 700;
}
& h5 {
    color: #FF9916;
    font-size: 19px;
    font-family: Monteserrat;
    width: 100%;
    text-align: end;
}
`
const Activity = () => {
  return (
    <ActivityWrapper>
    <h1>Activity</h1>
     <ActivityContent>
      {
        ActivityContentData.map((content, i)=> {
            return (
                <img  
                src={content.image}
                alt=""
                width={300}
                height={120}
                key={i}
                />
            )
        })
      }
      </ActivityContent>
      <h5> See More ...</h5>
    </ActivityWrapper>
   
  )
}

export default Activity

const ActivityContentData = [
    {
image: "/images/kids.svg",
text: "Smoothies"
    },
    {
        image: "/images/kids.svg",
        text: "African Delicacies"
            },
            {
                image: "/images/kids.svg",
                text: "African Delicacies"
                    },
                    {
                        image: "/images/kids.svg",
                        text: "African Delicacies"
                            }   
]