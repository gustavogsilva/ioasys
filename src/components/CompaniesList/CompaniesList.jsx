import React from "react";
import { useStateContext } from "../../state/context";
import CompanyCard from "./CompanyCard";
import enterpriseLogo from "../../assets/enterpriseLogo.svg";

export default function CompaniesList() {
  const [{ filteredCompanies }] = useStateContext();

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
        return <CompanyCard company={company} logo={enterpriseLogo} key={company.id} />;
      })}
    </div>
  );
}
