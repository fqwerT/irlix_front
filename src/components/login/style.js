import styled from "styled-components";


export const LoginContainer = styled.div`
height:100%;
width:100%;
display: flex;
justify-content: center;
align-items: center;
background-color:#1b1b1e ;
`

export const StyledWrapper = styled.div`
background-color:white;
padding: 10px;
border-radius: 7px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size:15px;
letter-spacing:1px;
`

export const StyledInputBox = styled.div`
 margin:10px;
 border-radius: 4px;
 color:black;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding:10px;
 gap:10px;
`

export const StyledButton = styled.button`
  border-radius: 7px;
  height:30px;
  width:120px;
  font-weight:600;
  letter-spacing:1px;
  &:hover {
    transform: scale(1.1);
    transition:0.3s linear;
  }



`