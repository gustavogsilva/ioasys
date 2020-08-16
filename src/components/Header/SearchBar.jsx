import React from "react";
import searchIcon from "../../assets/ic-search.svg";
import closeIcon from "../../assets/ic-close.svg";

export default function SearchBar() {
  return (
    <form action="" className="w-100 mt-4">
      <label className="sr-only" htmlFor="searchInput">
        Pesquisar
      </label>
      <div className="d-flex flex-nowrap">
        <img src={searchIcon} alt="Pesquisar" className="border-bottom ml-3" />
        <input className="search-input border-bottom" id="searchInput" placeholder="Pesquisar" name="search" />
        <button className="header-button mr-3 p-0">
          <img src={closeIcon} alt="cancelar pesquisa" className="border-bottom" />
        </button>
      </div>
    </form>
  );
}
