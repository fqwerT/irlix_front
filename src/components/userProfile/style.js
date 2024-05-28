import styled from "styled-components";

export const StyledProfile = styled.div`

  box-sizing:border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding:2px;
  color:#FFFBFE;
  background-color:inherit;

  height:75px;
  a {
    color:#FFFBFE;
  }
`; 

export const StyledTextHeading = styled.h1`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
  color:#FFFBFE;
  display: flex;
  gap:10px;
  align-items:center;
  justify-content: center;
`;

export const StyledIcon = styled.img`
  max-width: 35px;
  max-height: 35px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
`;
