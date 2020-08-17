import React from "react";
import { useStateContext } from "../../state/context";
import { SEARCH, DETAILS } from "../../utils/constants";
import { changePageState } from "../../state/actions";
import SearchBar from "./SearchBar";

import logoWhite from "../../assets/logo-white.svg";
import searchIcon from "../../assets/ic-search.svg";
import leftArrow from "../../assets/left-arrow.png";

export default function Header() {
  const [{ pageState }, dispatch] = useStateContext();

  if (pageState === SEARCH) {
    return <SearchBar />;
  }

  if (pageState === DETAILS) {
    return (
      <header id="header" className="justify-content-start">
        <button className="header-button ml-3" type="button">
          <img src={leftArrow} alt="voltar" className="header-button" />
        </button>
        <span className="header-text ml-4"> EMPRESA 1</span>
      </header>
    );
  }

  // if (pageState === MAIN)
  return (
    <header id="header">
      <img src={logoWhite} alt="ioasys" className="logo-header" />
      <button className="header-button search-button" type="button">
        <img
          src={searchIcon}
          alt="Pesquisar"
          onClick={() => {
            dispatch(changePageState(SEARCH));
          }}
        />
      </button>
    </header>
  );
}
