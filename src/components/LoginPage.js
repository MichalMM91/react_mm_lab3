import React from "react";
import "./LoginPage.css";
import 'bulma/css/bulma.min.css';
import { Icon } from "@iconify/react";
import Users from "../data/users.json";
import './style.css';

const LoginPage = () => {
  const formHandler = async (event) => {
    event.preventDefault();

    const user = Users.filter(
      (user) =>
        user.email === event.target[0].value &&
        user.password === event.target[1].value 
    )[0];

    if (user) {
      sessionStorage.setItem("uid", user.id);
      sessionStorage.setItem("user", user.user);
      window.location.replace("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div class="login"
      style={{
        backgroundColor: "darkgrey",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        textAlign: "center",
      }}
    >
      <div
        className={`${
          window.innerWidth < 576 ? "auth-form-mobile" : "auth-form-desktop"
        }`}
      >
        
        <form onSubmit={formHandler}>
            <h1 class="big"><Icon icon="mdi:cloud-circle-outline" /> SharpInterfaces.com</h1>
            <br />
            <br />
            <h3>Email <input class="input is-medium focus" type="text" name="email" /> </h3>
            <br />
            <h3>Password <input class="input is-medium focus" type="password" name="password" /></h3>
            <br />
            <button className="button is-info" type="submit">Sign In</button>

        </form>
      </div>
    </div>
  );
  
  
  
    
};

export default LoginPage;
