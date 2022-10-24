import moment from "moment";
import { useCallback, useEffect, useState } from "react";

const useAge = (target: moment.Moment) => {
  const [age, setAge] = useState("Just now");
  const [counter, setCounter] = useState(0);
  const [currentTime, setCurrentTime] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    if (counter === 10 && currentTime === 1) setAge("A few seconds ago");
    if (counter === 60) {
      setAge(`${currentTime} minute(s) ago`);
      setCurrentTime(currentTime + 1)
      setCounter(0);
    }
    return () => clearInterval(interval);
  }, [age, counter, currentTime]);

  const reset = useCallback(
    () => {
      setAge('Just now');
      setCounter(0);
      setCurrentTime(1);
    },
    [],
  );

  return { age, reset };
};

export { useAge };