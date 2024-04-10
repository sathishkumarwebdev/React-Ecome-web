import { React } from "react";
import { useState, useContext, useEffect } from "react";
import { loginContext } from "../Providers/LoginProvider";
// let userName = "sathish";
// let userPassword = "12345";
export function Login({ setAthu }) {
  //hooks
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setaccessToken } = useContext(loginContext);

  // const handleClick=(e)=> {
  //   e.preventDefault();
  //   if (userName === name && userPassword === password) {
  //     setAthu(true);
  //   } else {
  //     alert("try Agin");
  //   }
  // }

  async function postJSON(data) {
    try {
      const response = await fetch(
        "https://ecart-qr06.onrender.com/auth/login",
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
      // localStorage.setItem(result, result.access_token);
      // let datas = localStorage.getItem(result);
      // setaccessToken(datas);
      // setaccessToken(result);

      setAthu(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const data = { email: name, password: password };

  // const handleClick = () => {
  //   postJSON(data);
  // };

  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="login-box">
        <div className="login-form">
          <h3>Login</h3>
          Enter username 
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
          <button onClick={() => postJSON(data)}>login</button>
        </div>
      </div>
    </>
  );
}
