import { styled } from "styled-components";

export const ContainerBadgeScore = styled.div<{ isTrophyActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
  padding-right: 10px;
`;

export default ContainerBadgeScore;
