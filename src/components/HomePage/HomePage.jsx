import React, { useEffect } from "react";
import { useStateContext } from "../../state/context";
import { Redirect } from "react-router-dom";
import { getRequest } from "../../utils/api";
import { saveCompanies, signOut } from "../../state/actions";
import { SEARCH, DETAILS, STAND_BY } from "../../utils/constants";
import Header from "../Header/Header";
import CompaniesList from "../CompaniesList";
import CompanyDetails from "../CompanyDetails";
import StandBy from "./StandBy";
import Loading from "../Loading";

export default function HomePage() {
  const [{ isAuthenticated, pageState, loading }, dispatch] = useStateContext();

  // Get companies and save in state context
  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const res = await getRequest("/enterprises");
        if (!res) {
          dispatch(signOut);
          return;
        }
        dispatch(saveCompanies(res.enterprises));
      })();
    }
  }, [isAuthenticated, dispatch]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      {pageState === SEARCH && <CompaniesList />}
      {pageState === DETAILS && <CompanyDetails />}
      {pageState === STAND_BY && <StandBy />}
      {loading && <Loading />}
    </>
  );
}
