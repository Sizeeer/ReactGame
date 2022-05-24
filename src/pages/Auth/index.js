import React, { useCallback, useReducer, useRef, useState } from "react";
import { ReactComponent as ToggleIcon } from "./assets/toggle-icon.svg";
import logo from "./assets/logo.png";
import "./login.css";

const AuthHeader = () => (
  <div className="header-logo">
    <img src={logo} alt="Logo" />
  </div>
);

export const AuthPage = () => {
  const toggleEl = useRef();
  const closeEl = useRef();
  const containerEl = useRef();

  const handleOpenLoginForm = useCallback(() => {
    toggleEl.current.classList.remove("active");
    containerEl.current.classList.remove("active");
  }, []);

  const handleOpenRegisterForm = useCallback(() => {
    toggleEl.current.classList.add("active");
    containerEl.current.classList.add("active");
  }, []);

  return (
    <>
      <AuthHeader />
      <div ref={containerEl} className="container">
        <div className="card"></div>
        <div className="card">
          <h1 className="title">Login</h1>
          <form>
            <div className="input-container">
              <input type="email" id="#email" required="required" />
              <label for="#email">Email</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input type="password" id="#password" required="required" />
              <label for="#password">Password</label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button>
                <span>Go</span>
              </button>
            </div>
          </form>
        </div>
        <div className="card alt">
          <div
            ref={toggleEl}
            className="toggle"
            onClick={handleOpenRegisterForm}
          >
            <ToggleIcon />
          </div>
          <h1 className="title">
            Register
            <div
              ref={closeEl}
              className="close"
              onClick={handleOpenLoginForm}
            ></div>
          </h1>
          <form>
            <div className="input-container">
              <input type="email" id="#signup-email" required="required" />
              <label for="#signup-email">Email</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input
                type="password"
                id="#signup-password"
                required="required"
              />
              <label for="#signup-password">Password</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input
                type="password"
                id="#signup-repeat-password"
                required="required"
              />
              <label for="#signup-repeat-password">Repeat Password</label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button>
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
