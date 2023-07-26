import { useEffect, useRef, useState } from "react";
import { MainStopWatch, ContentClock } from "./styles";

export const StopWatch: React.FC<IStopwatch> = ({ active }) => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  let [stopWatchRef, setStopWatchRef] = useState<NodeJS.Timer>();

  const formatTime = (h: number, m: number, s: number) => {
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    // if (active) {
    setStopWatchRef(
      setInterval(() => {
        setTime((times) => {
          return {
            ...times,
            hours:
              times.minutes + 1 === 60 && times.seconds + 1 === 60
                ? times.hours + 1
                : times.hours,
            minutes:
              times.seconds + 1 === 60
                ? times.minutes === 59 && times.seconds === 59
                  ? 0
                  : times.minutes + 1
                : times.minutes,
            seconds: times.seconds === 59 ? 0 : times.seconds + 1,
          };
        });
      }, 1000)
    );
    // }
  }, []);

  useEffect(() => {
    if (active) {
      clearInterval(stopWatchRef);
    }
  }, [active]);

  return (
    <MainStopWatch>
      <ContentClock timeActive={active}>
        {formatTime(time.hours, time.minutes, time.seconds)}
      </ContentClock>
    </MainStopWatch>
  );
};
