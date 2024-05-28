import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNewsList = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  max-height: 90%;
  height: 90%;
  overflow: auto;
`;

export const StyledNewsCard = styled.article`
  max-width: 50%;
  max-height: 300px;
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 5px;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  // border: 1px solid black;
  &:hover {
    transform: scale(1.05);
    transition: 0.45s linear;
    box-shadow: -3px 5px 5px 0px rgba(0,0,0,0.24);
-webkit-box-shadow: -3px 5px 5px 0px rgba(0,0,0,0.24);
-moz-box-shadow: -3px 5px 5px 0px rgba(0,0,0,0.24);
  }
  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }
`;

export const StyledNewsTitle = styled.h1`
  font-size: 22px;
  font-weight: 500;
  text-align: left;
`;

export const StyledNewsDate = styled(StyledNewsTitle)`
  font-weight: 500;
  opacity: 0.5;
  font-size: 19px;
`;

export const StyledButton = styled.button`
  max-width: 140px;
  color: black;
  text-transform: uppercase;
  margin: 4px;
  font-weight: 400;
  background-color: #2e3036;
  color: white;
  margin:15px;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out;

  }
`;

export const StyledPostContent = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 3.9em;
  padding-top: 10px;
`;

export const StyledPostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

export const StyledPostAuthor = styled(StyledNewsTitle)`
  opacity: 0.5;
`;
