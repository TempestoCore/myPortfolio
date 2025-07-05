import React, { createContext, useContext } from "react";

export const portfolioContext = createContext({
  currentPage: 0,
  setCurrentPage: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  transition: false,
  setTransition: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  firstPageLoad: [false, false, false],
  setFirstPageLoad: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean[]>
  >,
});

export const usePortfolioContext = () => useContext(portfolioContext);
