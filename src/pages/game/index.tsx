import { useContext, useEffect, useState } from "react";
import Main, {
  Cards,
  Container,
  CardsOpen,
  CardsClose,
  OpenText,
  CardWrapper,
  Content,
  Counter,
} from "./styles";
import { StopWatch } from "@/Components/Stopwatch";
import { useRouter } from "next/router";
import { GlobalContext } from "@/Context/GlobalContext";
import toast from "react-hot-toast";

const Game = () => {
  const router = useRouter();
  const { userData, setUserData } = useContext(GlobalContext);
  const cardsGame = [
    { id: 1, content: "😀", isOpen: false, matchFound: false },
    { id: 2, content: "😂", isOpen: false, matchFound: false },
    { id: 3, content: "😅", isOpen: false, matchFound: false },
    { id: 4, content: "😆", isOpen: false, matchFound: false },
    { id: 5, content: "😋", isOpen: false, matchFound: false },
    { id: 6, content: "😍", isOpen: false, matchFound: false },
    { id: 7, content: "😎", isOpen: false, matchFound: false },
    { id: 8, content: "😏", isOpen: false, matchFound: false },
    { id: 9, content: "🤣", isOpen: false, matchFound: false },
    { id: 10, content: "🤓", isOpen: false, matchFound: false },
    { id: 11, content: "🧐", isOpen: false, matchFound: false },
    { id: 12, content: "🥳", isOpen: false, matchFound: false },
    { id: 13, content: "🤪", isOpen: false, matchFound: false },
    { id: 14, content: "😝", isOpen: false, matchFound: false },
    { id: 15, content: "🤑", isOpen: false, matchFound: false },
    { id: 16, content: "😜", isOpen: false, matchFound: false },
    { id: 17, content: "😳", isOpen: false, matchFound: false },
    { id: 18, content: "😲", isOpen: false, matchFound: false },
    { id: 19, content: "😱", isOpen: false, matchFound: false },
    { id: 20, content: "🤤", isOpen: false, matchFound: false },
  ];

  const [finishedGame, setFinishedGame] = useState(false);
  let [stopCounterRef, setCounterRef] = useState<NodeJS.Timer>();
  let [stopStartedRef, setStartedRef] = useState<NodeJS.Timer>();
  const [initRegressiveCounter, setInitRegressiveCounter] = useState(false);
  const [gameStarted, setGameStarted] = useState({
    counter: 3,
    regressive: true,
    started: true,
  });

  console.log(userData);

  const [currentCards, setCurrentCards] = useState(
    cardsGame
      .sort(() => Math.random() - 0.5)
      .slice(0, userData.level)
      .map((item) => [item, item])
      .flat()
      .sort(() => Math.random() - 0.57)
  );

  useEffect(() => {
    if (userData.name !== "" || userData.level !== undefined) {
      setTimeout(() => {
        setInitRegressiveCounter(true);
      }, 1000);
    }
  }, [userData.name]);

  useEffect(() => {
    if (initRegressiveCounter) {
      setCounterRef(
        setInterval(() => {
          setGameStarted((start) => {
            return {
              ...start,
              counter: start.counter === -2 ? start.counter : start.counter - 1,
            };
          });
        }, 2000)
      );
      setStartedRef(
        setInterval(() => {
          setGameStarted((start) => {
            return {
              ...start,
              regressive: start.counter === -2 ? false : !start.regressive,
            };
          });
        }, 1000)
      );
    }
  }, [initRegressiveCounter]);

  useEffect(() => {
    if (!gameStarted.regressive) return;

    if (gameStarted.counter === -1) {
      setTimeout(() => {
        setCurrentCards(
          currentCards.map((item, i) => {
            return { ...item, isOpen: true };
          })
        );
        setTimeout(() => {
          setGameStarted((start) => {
            return {
              ...start,
              startTime: new Date().getTime(),
            };
          });

          setCurrentCards(
            currentCards.map((item, i) => {
              return { ...item, isOpen: false };
            })
          );
          clearInterval(stopCounterRef);
          clearInterval(stopStartedRef);
        }, 1000);
      }, 50);
    }
  }, [gameStarted]);

  const openTheCard = (index: number) => {
    if (gameStarted.counter > -1) return;
    setCurrentCards(
      currentCards.map((item, i) => {
        if (index === i) {
          return { ...item, isOpen: true };
        }
        return item;
      })
    );
  };

  const defineValueScore = (level: number, time: number) => {
    return Math.round(
      (level *
        (level === 8
          ? 1000
          : level === 12
          ? 10000
          : level === 20
          ? 100000
          : 100)) /
        time
    );
  };

  useEffect(() => {
    if (currentCards.filter((item) => item.matchFound === false).length === 0) {
      setFinishedGame(true);
    }
    const chosenCards = currentCards.filter(
      (item) => item.isOpen === true && item.matchFound === false
    );
    if (chosenCards.length === 2) {
      setTimeout(() => {
        setCurrentCards(
          currentCards.map((item, i, array) => {
            if (chosenCards[0]?.id !== chosenCards[1]?.id) {
              if (item.matchFound === false) {
                return { ...item, isOpen: false };
              }
            } else {
              if (item.id === chosenCards[0].id) {
                return { ...item, isOpen: true, matchFound: true };
              }
            }
            return item;
          })
        );
      }, 500);
    }
  }, [currentCards]);

  if (userData.name === "" || !userData.level) {
    if (typeof window !== "undefined") {
      router.push("/");
      toast.error("Define a user and a level first.");
    }
    return null;
  }

  return (
    <Main>
      <Container>
        <StopWatch
          start={gameStarted.counter === -1}
          userName={userData.name}
          stop={finishedGame}
          getTime={(time) =>
            setUserData((state) => {
              return {
                ...state,
                score: defineValueScore(
                  userData.level!,
                  Number(`${time!.hours}${time!.minutes}${time!.seconds}`)
                ),
              };
            })
          }
        />
        <Content quantityItem={8}>
          {currentCards.map((emojis, index) => (
            <CardWrapper
              width={currentCards.length === 40 ? 7.5 : 8.5}
              height={
                currentCards.length === 24
                  ? 10
                  : currentCards.length === 40
                  ? 6
                  : 14
              }
              open={emojis.isOpen}
              key={index}
            >
              <CardsOpen matchFound={emojis.matchFound} open={emojis.isOpen}>
                {emojis.isOpen && (
                  <Cards
                    fontSize={
                      currentCards.length === 16
                        ? 6
                        : currentCards.length === 24
                        ? 5
                        : currentCards.length === 40
                        ? 4
                        : 7
                    }
                  >
                    {emojis.content}
                  </Cards>
                )}
              </CardsOpen>
              <CardsClose
                onClick={() => {
                  openTheCard(index);
                }}
                open={emojis.isOpen}
              >
                <OpenText
                  fontSize={
                    currentCards.length === 24
                      ? 1
                      : currentCards.length === 40
                      ? 0.7
                      : 1.1
                  }
                >
                  CLICK TO TURN THE CARD
                </OpenText>
              </CardsClose>
            </CardWrapper>
          ))}
        </Content>
      </Container>
      {initRegressiveCounter && (
        <Counter change={gameStarted.regressive}>
          {gameStarted.counter === -1
            ? ""
            : gameStarted.counter === 0
            ? "GO"
            : gameStarted.counter}
        </Counter>
      )}
    </Main>
  );
};

export default Game;
