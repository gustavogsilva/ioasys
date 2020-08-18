import React from "react";
import { changePageState, getDetailedCompany, setLoading } from "../../state/actions";
import { useStateContext } from "../../state/context";
import { DETAILS } from "../../utils/constants";

export default function CompanyCard({ company, logo }) {
  const [, dispatch] = useStateContext();
  const companyName = company.enterprise_name;
  const companyType = company.enterprise_type.enterprise_type_name;
  const companyCountry = company.country;

  const openCompanyDetails = async () => {
    dispatch(setLoading(true));
    dispatch(await getDetailedCompany(company.id));
    dispatch(changePageState(DETAILS));
    dispatch(setLoading(false));
  };

  return (
    <a href="#root" title={companyName} onClick={openCompanyDetails}>
      <div className="mx-3 mt-3 mx-sm-4 mt-sm-4">
        <div className="company-card d-flex p-3 p-sm-4">
          <img src={logo} alt={companyName} className="enterpriseLogo" />
          <div className="d-flex flex-column justify-content-center pl-3 pl-sm-4">
            <h1 className="card-title m-0">{companyName}</h1>
            <p className="card-content m-0">{companyType}</p>
            <p className="card-content m-0">{companyCountry}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
