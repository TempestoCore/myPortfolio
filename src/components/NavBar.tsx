import { useEffect, useState } from "react";
import { usePortfolioContext } from "../context/portfolioContext";
import { lang } from "../langObj";
interface PropType {
  currentLang: string;
}

export function NavBar({ currentLang }: PropType) {
  const { currentPage, setCurrentPage, setTransition, setFirstPageLoad } =
    usePortfolioContext();
  const [changePage, setChangePage] = useState(currentPage);
  const text = lang[currentLang as "ru" | "eng"].navBar;

  useEffect(() => {
    if (currentPage === changePage) return;

    const changePageHandler = () => {
      setFirstPageLoad((prev) => {
        prev[currentPage] = true;
        return prev;
      });
      setCurrentPage(changePage);
    };

    setTransition(true);
    const timerId = setTimeout(() => {
      changePageHandler();
    }, 1300);

    return () => {
      clearTimeout(timerId);
    };
  }, [
    changePage,
    currentPage,
    setTransition,
    setCurrentPage,
    setFirstPageLoad,
  ]);

  return (
    <div className={`flex md:gap-10 text-xl justify-center`}>
      {text.map((elem, idx) => (
        <button
          onClick={() => setChangePage(idx)}
          className={`relative ${
            currentPage === idx
              ? "border-b-1"
              : "before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:scale-x-0 before:bg-text hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-in"
          } px-4 py-2 hover:bg-card-bg  cursor-pointer transition-color duration-300 ease-in`}
          key={elem + idx}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}
