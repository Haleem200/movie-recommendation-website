import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let x = useNavigate();
  function submitLoginForm(e) {
    x("/");
  }
  return (
    <>
      <div className="w-75 mx-auto py-3">
        <h3 className="my-4">Registeration Form</h3>

        <form onSubmit={submitLoginForm}>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            className="form-control mb-2 my-input my-2"
            name="email"
            id="email"
          ></input>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            className="form-control mb-2 my-input my-2"
            name="password"
            id="password"
          ></input>

          <button type="submit" className="btn btn-info">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
