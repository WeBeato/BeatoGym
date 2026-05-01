import { useEffect, useState } from "react";

export default function Counter({ targetNum, startingNum = 0 }) {
  const [currentNum, setCurrentNum] = useState(startingNum);

  const duration = 2000;

  useEffect(() => {
    if (targetNum <= 0) return;

    const totalSteps = targetNum;
    console.log(totalSteps);
    const intervalTime = duration / totalSteps;
    console.log(intervalTime);

    const interval = setInterval(() => {
      setCurrentNum((prev) => {
        if (prev < targetNum) {
          return prev + 1;
        }
        clearInterval(interval);
        return targetNum;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [targetNum]);

  return <span>{currentNum}</span>;
}
