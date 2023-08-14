import { Trophy } from "@/Icons";
import { ContainerBadgeScore } from "./styles";

export const BadgeScore: React.FC<IBadgeScore> = ({
  score,
  position,
  isTrophyActive,
}) => {
  return (
    <ContainerBadgeScore isTrophyActive={isTrophyActive}>
      {score}{" "}
      <div style={{ padding: !isTrophyActive ? "34px" : undefined }}>
        {isTrophyActive && <Trophy position={position} />}
      </div>
    </ContainerBadgeScore>
  );
};

export default BadgeScore;
