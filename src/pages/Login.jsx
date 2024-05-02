import { React } from "react";
import { useState, useContext, useEffect } from "react";
import { loginContext } from "../Providers/LoginProvider";
import logoBlack from "../assests/logo-black.png";
import { RotatingLines } from "react-loader-spinner";

export function Login({ setAthu }) {
  //hooks
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [trigger, setTrigger] = useState(false);

  async function postJSON(data) {
    try {
      setTrigger(true);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        {
          method: "POST", // or 'PUT'
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Success:", result);

      if (!result.is_authenticated) {
        setAthu(false);
        setTrigger(false);
        setName("");
        setPassword("");

        alert(result.message);
      } else {
        localStorage.setItem("access_token", result.access_token);
        setAthu(true);
        setTrigger(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const data = { email: name, password: password };

  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  if (trigger) {
    return (
      <div className="spinner-ring">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeColor="#f08804"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="login-box">
        <div className="logo-part">logo</div>
        <div className="logo-login icon">My Cart</div>
        <div className="login-form">
          <h3>sign in</h3>
          <div className="login-input">
            <input
              value={name}
              onChange={handleUserName}
              placeholder="username"
            />

            <input
              value={password}
              onChange={handlePassword}
              placeholder="password"
              type="password"
            />
          </div>
          <button className="login-btn" onClick={() => postJSON(data)} disabled={trigger}>
            login
          </button>
        </div>
        <button className="new-account">Create your My Cart account</button>
      </div>
    </>
  );
}
