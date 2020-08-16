import React from "react";
import SearchBar from "./SearchBar";
import { MAIN, SEARCH, DETAILS } from "../utils/constants";

import logoWhite from "../../assets/logo-white.svg";
import searchIcon from "../../assets/ic-search.svg";
import leftArrow from "../../assets/left-arrow.png";

export default function Header() {
  let pageState = SEARCH;

  if (pageState === MAIN) {
    return (
      <header id="header">
        <img src={logoWhite} alt="ioasys" className="logo-header" />
        <button className="header-button search-button">
          <img src={searchIcon} alt="Pesquisar" />
        </button>
      </header>
    );
  }

  if (pageState === SEARCH) {
    return (
      <header id="header">
        <SearchBar />
      </header>
    );
  }

  if (pageState === DETAILS) {
    return (
      <header id="header" className="justify-content-start">
        <button className="header-button ml-3">
          <img src={leftArrow} alt="voltar" className="header-button" />
        </button>
        <span className="header-text ml-4"> EMPRESA 1</span>
      </header>
    );
  }
}
