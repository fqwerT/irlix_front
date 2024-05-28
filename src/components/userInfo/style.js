import styled from "styled-components";

export const StyledHeader = styled.section`
height:25%;
border-bottom:1px solid gray;
max-height:400px;
min-height:100px;
display: flex;
justify-content:flex-start;
align-items:center;
`

export const StyledWrapper = styled.section`
height:100%;
width:90%;
display: flex;
flex-direction:column;
`
export const StyledName = styled.h1`
font-size:40px;
padding-left:5%;
`
export const StyledInformation = styled.div`
padding: 10px;
`

export const StyledStaticInfo = styled(StyledName)`
font-size:20px;
font-weight:400;
`