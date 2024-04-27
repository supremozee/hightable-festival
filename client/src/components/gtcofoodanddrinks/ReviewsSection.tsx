import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { LiaComment } from "react-icons/lia";
import { IoMdShare } from "react-icons/io";
const ReviewContainer = styled.div`
display: flex;
flex-direction: column;
gap:12px;
width: 100%;
margin-left:16px;
`
const Title = styled.div`
font-size: 28px;
font-weight: semibold;
font-family: Cambon;
margin-bottom: 15px;
`
const ProfileContainer = styled.div`
display: flex;
width: 55%;
align-items: center;
height:64px;
justify-content: space-between;
`
const ProfileDetails= styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`
const Post = styled.div`
width: 100%;
font-family: Monteserrat;
color: #666670;
margin-bottom: 20px;
`
const Engagement = styled.div`
width: 100%;
max-width: 90%;
margin-left: 15px;
display: flex;
justify-content: space-between;
& div {
    display: flex;
    gap: 4px;
    align-items:center;
    justify-content: center;
}
`
const ReviewsSection = () => {
  return (
    <ReviewContainer>
        <Title>Reviews</Title>
        <Profile/>
        <Post>
        @ <span style={{color: "#0055FF"}}>{"mama_joy’s_kitchen"}</span> I feel like this
        shawarma had so much spice in it at least
         the one I ate, too much onions and it was
          quite greasy, please look into that.
        </Post>
        <Image
        src="/images/post.svg"
        alt="post"
        width = {400}
        height={132}
        />
        <Engagement>
           <div>
           <SlLike color='#FF9916' size={25}/>
           <p>120</p>
           </div>
           <div>
           <SlDislike size={25} />
           <p>120</p>
           </div>
           <div>
           <LiaComment size={25}/>
           <p>120</p>
           </div>
           <div>
           <IoMdShare size={25} />
           </div>
        </Engagement>
    </ReviewContainer>
  )
}
const Profile = ()=> {
    return (
        <ProfileContainer>
            <Image
            src="/images/dp.svg"
            alt="dp"
            width ={44}
            height={44}
            />
            <ProfileDetails>
                <h1>Adeola Adams</h1>
                <h2>Mama Joy’s Kitchen</h2>
            </ProfileDetails>
        </ProfileContainer>
    )
}
export default ReviewsSection