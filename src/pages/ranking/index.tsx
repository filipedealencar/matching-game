import CustomTable from "@/Components/CustomTable";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ContainerRanking, ContentRanking, MainRanking } from "./styles";
import { BadgeName } from "./Badges/Name";
import BadgeScore from "./Badges/Score";
import BadgeTime from "./Badges/Times";
import { GlobalContext } from "@/Context/GlobalContext";
import { getScore } from "@/Services/api";
import router from "next/router";
import toast from "react-hot-toast";

interface DataItem {
  id: number;
  name: string;
  age: number;
}

const Ranking: React.FC = ({}) => {
  const { userData, setUserData } = useContext(GlobalContext);

  const [scoreData, setScoreData] = useState<ScoreDatabase[]>([]);

  useEffect(() => {
    const typeLevel =
      userData.level === 4
        ? "beginner"
        : userData.level === 8
        ? "intermediate"
        : userData.level === 12
        ? "advanced"
        : userData.level === 20
        ? "expert"
        : "beginner";

    setScoreData(
      JSON.parse(localStorage.getItem("ranking")!)[typeLevel].sort(
        (a: any, b: any) => b.score - a.score
      )
    );

    // getScore(
    //   userData.level === 4
    //     ? "db_matching_game_beginner"
    //     : userData.level === 8
    //     ? "db_matching_game_intermediate"
    //     : userData.level === 12
    //     ? "db_matching_game_advanced"
    //     : userData.level === 20
    //     ? "db_matching_game_expert"
    //     : "db_matching_game"
    // ).then((response) => setScoreData(response.data));
  }, []);
  const value = [
    { name: "Alice", time: "00:00:47", score: 560 },
    { name: "Bob", time: "00:01:34", score: 345 },
    { name: "Charlie", time: "00:01:23", score: 330 },
    { name: "John", time: "00:01:12", score: 320 },
    { name: "John", time: "00:01:12", score: 320 },
    { name: "John", time: "00:01:12", score: 320 },
    { name: "John", time: "00:01:12", score: 320 },
  ];

  const data = useMemo(() => {
    return scoreData.map((item, index) => ({
      name: <BadgeName name={item.name} />,
      time: <BadgeTime time={item.time} />,
      score: (
        <BadgeScore
          position={index}
          score={item.score}
          isTrophyActive={index < 3}
        />
      ),
    }));
  }, [scoreData]);

  if (userData.name === "" || !userData.level) {
    if (typeof window !== "undefined") {
      router.push("/");
      toast.error("Define a user and a level first.");
    }
    return null;
  }

  return (
    <MainRanking>
      <ContainerRanking>
        <ContentRanking>
          <h1>
            {`Ranking level ${
              userData.level === 4
                ? "Beginner"
                : userData.level === 8
                ? "Intermediate"
                : userData.level === 12
                ? "Advanced"
                : userData.level === 20
                ? "Expert"
                : ""
            }`}
          </h1>

          <CustomTable data={data} />
        </ContentRanking>
      </ContainerRanking>
    </MainRanking>
  );
};

export default Ranking;
