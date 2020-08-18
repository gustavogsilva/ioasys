import React, { useEffect } from "react";
import { useStateContext } from "../../state/context";
import { Redirect } from "react-router-dom";
import { getRequest } from "../../utils/api";
import { saveCompanies } from "../../state/actions";
import Header from "../Header/Header";
import CompaniesList from "../CompaniesList";

export default function HomePage() {
  const [{ isAuthenticated }, dispatch] = useStateContext();

  // Get companies and save in state context
  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const { enterprises } = await getRequest("/enterprises");
        if (!enterprises) return; // TODO
        dispatch(saveCompanies(enterprises));
      })();
    }
  }, [isAuthenticated, dispatch]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <CompaniesList />
    </>
  );
}
