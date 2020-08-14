import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import logoHome from "./logo-home.svg";
import iconEmail from "./ic-email.svg";
import iconLock from "./ic-cadeado.svg";

export default function Login() {
  const [validationError, setValidationError] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  // Check for validation errors from client side
  useEffect(() => {
    Object.keys(errors).length > 0 ? setValidationError(true) : setValidationError(false);
  }, [errors]);

  const onSubmit = data => "";

  // console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="center">
      <div id="login-wrapper" className="w-100 d-flex flex-column align-items-center">
        <img src={logoHome} alt="ioasys" className="logo mb-5" />
        <h1 className="text-center">BEM-VINDO AO EMPRESAS</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>

        <form id="login-form" className="w-100 position-relative" onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only" htmlFor="loginEmailInput">
            E-mail
          </label>
          <div className="input-group mb-4">
            <div className={`input-group-prepend ${validationError ? "validation-error" : ""}`}>
              <img src={iconEmail} alt="E-mail" />
            </div>
            <input
              type="text"
              className={`login-input form-control ${validationError ? "validation-error" : ""}`}
              id="loginEmailInput"
              placeholder="E-mail"
              name="email"
              ref={register({ pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
            />
            {validationError && <span className="validation-error-alert">!</span>}
          </div>

          <label className="sr-only" htmlFor="loginPasswordInput">
            Senha
          </label>
          <div className="input-group mb-2">
            <div className={`input-group-prepend ${validationError ? "validation-error" : ""}`}>
              <img src={iconLock} alt="Senha" />
            </div>
            <input
              type="password"
              className={`login-input form-control ${validationError ? "validation-error" : ""}`}
              id="loginPasswordInput"
              placeholder="Senha"
              name="password"
              ref={register({ required: true })}
            />
            {validationError && <span className="validation-error-alert">!</span>}
          </div>
          {validationError && (
            <p className="validation-error-text">Credenciais informadas são inválidas, tente novamente.</p>
          )}

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
