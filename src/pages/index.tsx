import { useEffect, useState } from "react";
import Main, {
  Cards,
  Container,
  CardsOpen,
  CardsClose,
  OpenText,
  CardWrapper,
} from "./styles";
import { StopWatch } from "@/Components/Stopwatch";

const Home = () => {
  const cardsGame = [
    { id: 1, content: "😀", isOpen: false, matchFound: false },
    { id: 2, content: "😂", isOpen: false, matchFound: false },
    { id: 3, content: "😅", isOpen: false, matchFound: false },
    { id: 4, content: "😆", isOpen: false, matchFound: false },
    { id: 5, content: "😋", isOpen: false, matchFound: false },
    { id: 6, content: "😍", isOpen: false, matchFound: false },
    { id: 7, content: "😎", isOpen: false, matchFound: false },
    { id: 8, content: "😏", isOpen: false, matchFound: false },
  ];

  const [finishedGame, setFinishedGame] = useState(false);

  const [currentCards, setCurrentCards] = useState(
    cardsGame
      .map((item) => [item, item])
      .flat()
      .sort(() => Math.random() - 0.57)
  );

  const openTheCard = (index: number) => {
    setCurrentCards(
      currentCards.map((item, i) => {
        if (index === i) {
          return { ...item, isOpen: true };
        }
        return item;
      })
    );
  };

  console.log(finishedGame);

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

  return (
    <Main>
      <StopWatch active={finishedGame} />
      <Container quantityItem={currentCards.length / 2}>
        {currentCards.map((emojis, index) => (
          <CardWrapper open={emojis.isOpen} key={index}>
            {/* {emojis.isOpen ? ( */}
            <CardsOpen
              matchFound={emojis.matchFound}
              open={emojis.isOpen}
              // key={index}
            >
              {emojis.isOpen && <Cards>{emojis.content}</Cards>}
            </CardsOpen>
            <CardsClose
              onClick={() => {
                openTheCard(index);
              }}
              open={emojis.isOpen}
              // key={index}
            >
              <OpenText>CLICK TO TURN THE CARD</OpenText>
            </CardsClose>
          </CardWrapper>
        ))}
      </Container>
    </Main>
  );
};

export default Home;
