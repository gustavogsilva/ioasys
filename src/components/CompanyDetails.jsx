import React from "react";
import { useStateContext } from "../state/context";
import enterpriseLogo from "../assets/enterpriseLogo.svg";

export default function CompanyDetails() {
  const [{ detailedCompany }] = useStateContext();

  const { enterprise_name, description } = detailedCompany;

  return (
    <div className="p-3 p-sm-4 p-lg-5">
      <div className="card container-site p-3 p-sm-4 p-lg-5">
        <img className="card-img-top" src={enterpriseLogo} alt={enterprise_name} />
        <div className="card-body">
          <h5 className="card-title">{enterprise_name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
