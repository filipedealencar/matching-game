import { styled } from "styled-components";

export const TableWrapper = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 450px;
  overflow: auto;
  border-radius: 15px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    border-radius: 5px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #8ea2ab;
  }
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TheadStyle = styled.thead`
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const TRStyle = styled.tr<{ position: number }>`
  background: ${({ position }) =>
    position === 0
      ? "#FBBA22"
      : position === 1
      ? "#C0C0C0"
      : position === 2
      ? "#CD7F32"
      : "#1b8cff"};
`;
export const THStyle = styled.th`
  padding: 10px;
  background-color: #f2f2f2;
`;
export const TDStyle = styled.td<{ isTheFirst: boolean }>`
  color: #fff;
  border-top: 1px solid #ccc;
  font-size: 1rem;
  font-weight: 700;
  filter: drop-shadow(0px 0px 2px black);

  &:first-child {
    /* color: #fff; */
    border-left: 1px solid #ccc;
  }

  &:last-child {
    border-right: 1px solid #ccc;
  }
`;
export const TbodyStyle = styled.tbody`
  /* background: #f2b823; */
`;

export default TableStyle;
