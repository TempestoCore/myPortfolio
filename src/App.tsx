import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { usePortfolioContext } from "./context/portfolioContext";
import { TransitionAnimation } from "./components/TransitionAnimation";
import { NavBar } from "./components/NavBar";
const saveChangeLang = (lang: string) => {
  const savedLang = localStorage.getItem("lang");
  if (!savedLang) {
    localStorage.setItem("lang", "eng");
    return;
  }
  if (lang != savedLang) {
    localStorage.setItem("lang", lang);
    return;
  }
  return;
};

const getSavedLang = () => {
  const savedLang = localStorage.getItem("lang");
  if (!savedLang) {
    localStorage.setItem("lang", "eng");
    return "eng";
  }
  return savedLang;
};

function App() {
  const [currentLang, setCurrentLang] = useState("eng");
  const { currentPage, transition, setCurrentPage } = usePortfolioContext();
  const changeLang = (lang: string) => {
    setCurrentLang(lang);
    saveChangeLang(lang);
  };
  useEffect(() => {
    setCurrentLang(() => getSavedLang());
  }, []);
  useEffect(() => {}, [currentLang, setCurrentPage]);
  return (
    <div className="relative w-full flex flex-col items-center overflow-x-hidden">
      {transition && <TransitionAnimation />}
      <div className="absolute z-10 w-full flex justify-end">
        <div className="absolute flex justify-center w-full pt-2">
          <NavBar currentLang={currentLang} />
        </div>
      </div>
      {currentPage === 0 ? (
        <Home currentLang={currentLang} />
      ) : currentPage === 1 ? (
        <Projects currentLang={currentLang} />
      ) : (
        <Contact currentLang={currentLang} />
      )}
      <div className="">
        <button
          className={` cursor-pointer ${
            currentLang === "ru" ? "font-bold text-2xl" : "opacity-50"
          } hover:text-button transition-colors duration-300 ease`}
          onClick={() => changeLang("ru")}
        >
          RU
        </button>
        <button
          className={` cursor-pointer ${
            currentLang === "eng" ? "font-bold text-2xl" : "opacity-50"
          } hover:text-button transition-colors duration-300 ease`}
          onClick={() => changeLang("eng")}
        >
          ENG
        </button>
      </div>
    </div>
  );
}

export default App;
