import React from 'react';

import styled from 'styled-components';

const CategoryContent = styled.div`
width: 100%;
display: flex;
gap: 15px;
overflow: hidden;
overflow-x: scroll;
margin: 16px;
height: 100%;
scrollbar-width: none;

`
const CategoryWrapper = styled.div`
margin: 30px 24px 0 16px;
height: 200px;
width: 100%;
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
const Category = () => {
  return (
    <CategoryWrapper>
    <h1>Category</h1>
     <CategoryContent>
      {
        CategoryContentData.map((content, i)=> {
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
      </CategoryContent>
      <h5> See More ...</h5>
    </CategoryWrapper>
   
  )
}

export default Category

const CategoryContentData = [
    {
image: "/images/smoothies.svg",
text: "Smoothies"
    },
    {
        image: "/images/smoothies.svg",
        text: "African Delicacies"
            },
            {
                image: "/images/smoothies.svg",
                text: "African Delicacies"
                    },{
                        image: "/images/smoothies.svg",
                        text: "African Delicacies"
                            }
]