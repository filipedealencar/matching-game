import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const Container = styled.div<{ quantityItem: number }>`
  display: grid;
  grid-template-columns: ${({ quantityItem }) =>
    `repeat(${quantityItem}, 1fr)`};
  grid-template-rows: ${({ quantityItem }) =>
    ` repeat(${quantityItem > 4 ? 2 : 1}, 1fr)`};
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

export const CardWrapper = styled.div<{ open: boolean }>`
  width: 8.5rem;
  height: 14rem;
  perspective: 1000px;
  transition: transform 0.5s;
  transform: ${({ open }) => (open ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const CardsOpen = styled.div<{ open: boolean; matchFound: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ matchFound }) => (matchFound ? "#64d158" : "#e96565")};
  margin: 0;

  border-radius: 16px;
  perspective: 1000px;
  transition: transform 0.5s;
  backface-visibility: hidden;
  transform: ${({ open }) => (open ? "rotateY(0deg)" : "rotateY(180deg)")};
`;
export const CardsClose = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  background: #6580e9;
  margin: 0;
  border-radius: 16px;
  perspective: 1000px;
  transition: transform 0.5s;
  backface-visibility: hidden;
  transform: ${({ open }) => (open ? "rotateY(180deg)" : "rotateY(0deg)")};
  cursor: pointer;
`;

export const OpenText = styled.div`
  font-size: 1.1rem;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d1d1d1;
  text-align: center;
`;
export const Cards = styled.p`
  font-size: 100px;
`;

export default Main;
