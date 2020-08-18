import React from "react";
import { useStateContext } from "../../state/context";
import { STAND_BY, SEARCH } from "../../utils/constants";
import enterpriseLogo from "../../assets/enterpriseLogo.svg";

export default function CompaniesList() {
  const [{ pageState, filteredCompanies }] = useStateContext();

  if (pageState === STAND_BY)
    return (
      <div className="center">
        <h3 className="text-center"> Clique na busca para iniciar.</h3>
      </div>
    );

  if (pageState === SEARCH) {
    if (filteredCompanies.length === 0) {
      return (
        <div className="center">
          <h3 className="text-center"> Nenhuma empresa foi encontrada para a busca realizada.</h3>
        </div>
      );
    }
    return (
      <div className="container-site flex-column">
        {filteredCompanies.map(company => {
          const companyName = company.enterprise_name;
          const companyType = company.enterprise_type.enterprise_type_name;
          const companyCountry = company.country;
          return (
            <div key={company.id} className="mx-3 mt-3 mx-sm-4 mt-sm-4">
              <div className="company-card d-flex p-3 p-sm-4">
                <img src={enterpriseLogo} alt={companyName} className="enterpriseLogo" />
                <div className="d-flex flex-column justify-content-center pl-3 pl-sm-4">
                  <h1 className="card-title m-0">{companyName}</h1>
                  <p className="card-content m-0">{companyType}</p>
                  <p className="card-content m-0">{companyCountry}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
