import { useEffect } from "react";
import { usePortfolioContext } from "../context/portfolioContext";
export function TransitionAnimation() {
  const { setTransition } = usePortfolioContext();
  const divArr = Array(100).fill("");
  useEffect(() => {
    const handleAnimationEnd = () => {
      setTransition(false);
    };

    const getRandomArray = (length: number) => {
      const arr = Array(length)
        .fill(0)
        .map((_, idx) => idx);
      for (let idx = arr.length - 1; idx != 0; idx -= 1) {
        const randomIdx = Math.round(Math.random() * idx);
        const a = arr[idx];
        const b = arr[randomIdx];
        arr[idx] = b;
        arr[randomIdx] = a;
      }
      return arr;
    };

    let intervalIdFirst: number = 0;
    let intervalIdSecond: number = 0;

    const animationHandler = (
      animation: string,
      arr: number[],
      animationOld?: string
    ) => {
      let idx = 0;
      const intervalId = setInterval(() => {
        const randomIdx = arr[idx];
        const div = document.getElementById(`${randomIdx}`);
        if (animationOld) {
          div?.classList.remove(animationOld);
        }
        div?.classList.add(animation);
        idx += 1;
      }, 10);
      return intervalId;
    };

    intervalIdFirst = animationHandler(
      "animate-transitionShowPixel",
      getRandomArray(100)
    );
    const timeOutId = setTimeout(() => {
      intervalIdSecond = animationHandler(
        "animate-transitionHidePixel",
        getRandomArray(100),
        "animate-transitionShowPixel"
      );
    }, 1400);

    const timeOutEndId = setTimeout(() => {
      handleAnimationEnd();
    }, 2500);

    return () => {
      clearInterval(intervalIdFirst);
      clearTimeout(timeOutId);
      clearInterval(intervalIdSecond);
      clearTimeout(timeOutEndId);
    };
  }, [setTransition, divArr]);
  return (
    <div className="fixed w-screen h-screen z-100 grid grid-cols-10 grid-rows-10">
      {divArr.map((_, idx) => (
        <div
          id={`${idx}`}
          key={idx}
          className={`bg-card-bg scale-105 opacity-0`}
        ></div>
      ))}
    </div>
  );
}
