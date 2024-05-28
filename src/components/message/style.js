import styled from "styled-components";

export const StyledMessage = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  //width: 100%;
  list-style-type: none;
  margin-left:15px;
  word-break: break-all;
  white-space: normal;
  padding:5px;

  font-size: 24px;
  background-color:white;
  margin:10px;
  border-radius: 7px;
  padding-left:8px;
  padding-right:8px;
  padding-top:4px;
  padding-bottom:4px;
  &:hover {
    transform: scale(1.05);
    transition:0.3s linear;
  }
  
`;


export const StyledUserName = styled.p`
font-weight:300;
font-family:'Roboto';
opacity:0.8;
font-size:15px;
cursor:pointer;
&:hover {
    
    text-decoration:underline;
}
`

export const StyledMessageText = styled(StyledUserName)`
font-weight:300;
overflow-y:auto;
letter-spacing:0.7px;
font-size:18px;
max-height: 180px;
max-width:900px;

opacity:1;
&:hover {
    text-decoration:none;
}
`


export const StyledDate = styled(StyledMessageText)`
font-weight:300;
max-height: 180px;
max-width:900px;
letter-spacing:0.7px;
font-size:13px;
opacity:1;
opacity: 0.9;
&:hover {
    text-decoration:none;
}
`