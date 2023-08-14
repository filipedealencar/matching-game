import { ContainerBadgeTime } from "./styles";

export const BadgeTime: React.FC<IBadgeTime> = ({ time }) => {
  return <ContainerBadgeTime>{time}</ContainerBadgeTime>;
};

export default BadgeTime;
