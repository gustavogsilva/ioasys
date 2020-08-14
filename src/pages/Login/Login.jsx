import React, { useState } from "react";
import logoHome from "./logo-home.svg";
import iconEmail from "./ic-email.svg";
import iconLock from "./ic-cadeado.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  return (
    <div className="center">
      <div id="login-wrapper" className="w-100 d-flex flex-column align-items-center">
        <img src={logoHome} alt="ioasys" className="logo mb-5" />
        <h1 className="text-center">BEM-VINDO AO EMPRESAS</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>

        <form id="login-form" className="w-100" action="">
          <label className="sr-only" htmlFor="loginEmailInput">
            E-mail
          </label>
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <img src={iconEmail} alt="E-mail" />
            </div>
            <input
              type="email"
              className="login-input form-control"
              id="loginEmailInput"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <label className="sr-only" htmlFor="loginPasswordInput">
            Senha
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <img src={iconLock} alt="Senha" />
            </div>
            <input
              type="password"
              className="login-input form-control"
              id="loginPasswordInput"
              placeholder="Senha"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="px-3 mt-5">
            <button type="submit" className="btn btn-info w-100 p-2 font-weight-bold">
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
