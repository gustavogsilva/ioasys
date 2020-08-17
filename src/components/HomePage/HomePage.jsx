import React, { useEffect } from "react";
import { useStateContext } from "../../state/context";
import { Redirect } from "react-router-dom";
import { getRequest } from "../../utils/api";
import Header from "../Header/Header";

export default function HomePage() {
  const [{ isAuthenticated }] = useStateContext();
  // Empresas = useState() ?

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const data = await getRequest("/enterprises");
        if (!data) console.log("ERRO AO BUSCAR ENTERPRISES");
        console.log(data);
      })();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header />
    </div>
  );
}
