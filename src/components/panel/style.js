import styled from "styled-components";

export const Panel = styled.aside`
  transition: all 0.3s linear;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  min-width: 200px;
  max-width: 80px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #5468ff;
  color: #fffbfe;
  padding-top: 10px;
  align-items: center;
`;

export const PanelButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: initial;
  color: white;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const NavigateNews = styled.button`
  font-weight: 400;
  color: white;
  margin: 5px;
  background-color: inherit;
  border: 0;
  font-size: 19px;
  display: flex;
  flex-direction: column;
  max-width: 150px;
  &:hover {
    transform: scale(1.1);
    transition: 0.1s linear;
  }
`;

export const StyledIcon = styled.img`
  max-width: 30px;
  max-height: 30px;
`;

export const SyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledPanelWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 97%;
  justify-content: space-between;
`;
