import CustomTable from "@/Components/CustomTable";
import React, { useMemo } from "react";
import { ContainerRanking, ContentRanking, MainRanking } from "./styles";
import { BadgeName } from "./Badges/Name";

interface DataItem {
  id: number;
  name: string;
  age: number;
}

const Ranking: React.FC = () => {
  const value = [
    { name: "Alice", time: "00:00:47", score: 560 },
    { name: "Bob", time: "00:01:34", score: 345 },
    { name: "Charlie", time: "00:01:23", score: 330 },
  ];

  const data = useMemo(() => {
    return value.map((item) => ({
      name: <BadgeName name={item.name} />,
      time: <div>{item.time}</div>,
      score: <div>{item.score}</div>,
    }));
  }, [value]);

  return (
    <MainRanking>
      <ContainerRanking>
        <ContentRanking>
          <h1>React Table Example</h1>
          <CustomTable data={data} />
        </ContentRanking>
      </ContainerRanking>
    </MainRanking>
  );
};

export default Ranking;
