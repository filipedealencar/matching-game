import { styled } from "styled-components";

export const MainStopWatch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentClock = styled.div<{ timeActive: boolean }>`
  font-family: "clockicons";
  font-size: 3rem;
  text-align: center;
  color: ${({ timeActive }) => (timeActive ? "#21c12f" : "#000")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.span<{ timeActive: boolean }>`
  font-family: "Orbitron";
  font-size: 2rem;
  text-align: center;
  color: ${({ timeActive }) => (timeActive ? "#21c12f" : "#000")};
`;
