import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import logoHome from "../../assets/logo-home.svg";
import iconEmail from "../../assets/ic-email.svg";
import iconLock from "../../assets/ic-cadeado.svg";
import iconEye from "../../assets/ic-eye.png";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [validationError, setValidationError] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check for validation errors in the client side
  useEffect(() => {
    Object.keys(errors).length > 0 ? setValidationError(true) : setValidationError(false);
  }, [errors]);

  const handleEye = () => {
    watch("password") ? setShowEye(true) : setShowEye(false);
    setValidationError(false);
  };

  const onSubmit = data => "";

  return (
    <div className="center">
      <div id="login-wrapper" className="w-100 d-flex flex-column align-items-center">
        <img src={logoHome} alt="ioasys" className="logo mb-5" />
        <h1 className="text-center mb-4">
          BEM-VINDO AO <br /> EMPRESAS
        </h1>
        <p className="text-center mb-4">Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</p>

        <form id="login-form" className="w-100 position-relative mt-3" onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only" htmlFor="loginEmailInput">
            E-mail
          </label>
          <div className="input-group mb-4">
            <div className={`input-group-prepend ${validationError ? "validation-error" : ""}`}>
              <img src={iconEmail} alt="E-mail" />
            </div>
            <input
              type="text"
              className={`login-input form-control py-0 ${validationError ? "validation-error" : ""}`}
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
              type={showPassword ? "text" : "password"}
              className={`login-input form-control py-0 ${validationError ? "validation-error" : ""}`}
              id="loginPasswordInput"
              placeholder="Senha"
              name="password"
              ref={register({ required: true })}
              onChange={handleEye}
            />
            {validationError ? (
              <span className="validation-error-alert">!</span>
            ) : showEye ? (
              <img
                src={iconEye}
                alt="Mostrar ou esconder senha"
                className="eye"
                onClick={() => setShowPassword(prevState => !prevState)}
              />
            ) : (
              ""
            )}
          </div>
          {validationError && (
            <p className="validation-error-text">Credenciais informadas são inválidas, tente novamente.</p>
          )}

          <div className="px-3 mt-5">
            <button
              type="submit"
              className={`btn w-100 p-3 font-weight-bold ${validationError ? "btn-gray" : "btn-blue"}`}
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
