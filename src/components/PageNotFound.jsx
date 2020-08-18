import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="center flex-column">
      <h1>Erro 404</h1>
      <h3>Página não encontrada</h3>
      <h3>
        <Link to="/">Voltar</Link>
      </h3>
    </div>
  );
}
