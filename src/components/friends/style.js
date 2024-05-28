import styled from "styled-components";


export const FriendCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 5px;
  cursor: pointer;
  color: white;
  border-bottom: 1px solid inherit;
  &:hover {
    background-color:white;
    border-radius: 7px;
    color:#2E3036;
  }
  font-size: 17px;
  font-weight: 300;
  padding-left: 15px;
  font-family:"Roboto";
`;

export const FriendsTitle = styled.button`
margin:5px;
font-weight:400;
background-color:inherit;
border:0;
color: white;
font-size:19px;
display: flex;
flex-direction:column;
&:hover {
    transform:scale(1.1);
    transition: 0.1s linear;
  }
`

export const StyledName = styled.p`
//color:white;
font-size:18px;
font-weight:300;
letter-spacing: 0.9px;
`

export const StyledEmail = styled(StyledName)`
//color:white;
opacity: 0.5;
font-weight:300;
font-size:15px;

`

