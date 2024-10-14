import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  //   const [user, setUser] = useState({
  //     first_name: "",
  //     last_name: "",
  //     age: 0,
  //     email: "",
  //     password: "",
  //   });

  //   function getUSerData(e) {
  //     let property = e.target.name;
  //     let myUser = { ...user };
  //     myUser[property] = e.target.value;
  //     setUser(myUser);
  //     console.log(myUser);
  //   }

  //   const [error, setError] = useState("");
  //   async function sendUserDatatoApi() {
  //     let { data } = await Axios.post(
  //       `https://route-egypt-api.herokuapp.com/signup`,
  //       user
  //     );

  //     if (data.message === "success") {
  //       //navigate to home||login
  //     } else {
  //       setError(data.message);
  //     }
  //   }

  let x = useNavigate();
  function submitRegisterForm(e) {
    x("/login");
  }
  return (
    <>
      <div className="w-75 mx-auto py-3">
        <h3 className="my-4">Registeration Form</h3>

        <form onSubmit={submitRegisterForm}>
          <label htmlFor="first_name">first_name:</label>
          <input
            type="text"
            className="form-control mb-2 my-input my-2"
            name="first_name"
            id="first_name"
          ></input>

          <label htmlFor="last_name">last_name:</label>
          <input
            type="text"
            className="form-control mb-2 my-input my-2"
            name="last_name"
            id="last_name"
          ></input>

          <label htmlFor="age">age:</label>
          <input
            type="number"
            className="form-control mb-2 my-input my-2"
            name="age"
            id="age"
          ></input>

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
            Register
          </button>
        </form>
      </div>
    </>
  );
}
