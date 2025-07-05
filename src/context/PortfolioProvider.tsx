import { useState } from "react";
import { portfolioContext } from "./portfolioContext";

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [transition, setTransition] = useState(false);
  const [firstPageLoad, setFirstPageLoad] = useState([false, false, false]);
  return (
    <portfolioContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        transition,
        setTransition,
        firstPageLoad,
        setFirstPageLoad,
      }}
    >
      {children}
    </portfolioContext.Provider>
  );
}
