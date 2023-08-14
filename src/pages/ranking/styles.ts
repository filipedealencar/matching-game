import styled from "styled-components";

export const MainRanking = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const ContainerRanking = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const ContentRanking = styled.div`
  width: 500px;
  height: 500px;
  margin: 20px 60px;
  h1 {
    text-align: center;
    filter: drop-shadow(2px 7px 6px black);
    font-size: 2rem;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

export default MainRanking;
