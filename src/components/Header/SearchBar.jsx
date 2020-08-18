import React from "react";
import { useStateContext } from "../../state/context";
import { STAND_BY } from "../../utils/constants";
import { changePageState, saveFilteredCompanies } from "../../state/actions";
import searchIcon from "../../assets/ic-search.svg";
import closeIcon from "../../assets/ic-close.svg";

export default function SearchBar() {
  const [{ companies }, dispatch] = useStateContext();

  const handleSearch = e => {
    if (!e.target.value) return dispatch(saveFilteredCompanies([]));
    const filteredCompanies = companies.filter(company => {
      return company.enterprise_name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    dispatch(saveFilteredCompanies(filteredCompanies));
  };

  return (
    <header id="header">
      <div className="container-site p-0">
        <form action="" className="w-100 mt-4">
          <label className="sr-only" htmlFor="searchInput">
            Pesquisar
          </label>
          <div className="d-flex flex-nowrap">
            <img src={searchIcon} alt="Pesquisar" className="border-bottom ml-3" />
            <input
              className="search-input border-bottom"
              id="searchInput"
              placeholder="Pesquisar"
              name="search"
              onChange={handleSearch}
              autoFocus
            />
            <button
              type="button"
              className="header-button mr-3 p-0 border-bottom"
              onClick={() => {
                dispatch(changePageState(STAND_BY));
              }}
            >
              <img src={closeIcon} alt="cancelar pesquisa" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
