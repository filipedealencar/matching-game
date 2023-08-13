import { ContainerBadgeName } from "./styles";

export const BadgeName: React.FC<IBadgeName> = ({ name }) => {
  return <ContainerBadgeName>{name}</ContainerBadgeName>;
};

export default BadgeName;
