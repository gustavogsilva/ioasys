import React from "react";
import { useStateContext } from "../../state/context";
import { SEARCH, DETAILS, STAND_BY } from "../../utils/constants";
import { changePageState, signOut } from "../../state/actions";
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
        <div className="container-site">
          <button
            className="header-button ml-3"
            type="button"
            onClick={() => {
              dispatch(changePageState(SEARCH));
            }}
          >
            <img src={leftArrow} alt="voltar" className="header-button" />
          </button>
          <span className="header-text ml-4"> EMPRESA 1</span>
        </div>
      </header>
    );
  }

  if (pageState === STAND_BY) {
    return (
      <header id="header">
        <div className="container-site p-0">
          <button
            className="logout d-none d-md-block"
            onClick={() => {
              dispatch(signOut());
            }}
          >
            SAIR
          </button>
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
        </div>
      </header>
    );
  }
}
