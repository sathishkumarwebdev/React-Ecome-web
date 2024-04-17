import { React } from "react";
import { useState, useContext, useEffect } from "react";
import { loginContext } from "../Providers/LoginProvider";
import logoBlack from "../assests/logo-black.png";
// let userName = "sathish";
// let userPassword = "12345";
export function Login({ setAthu }) {
  //hooks
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [trigger, setTrigger] = useState(false);
  const { accessToken, setaccessToken } = useContext(loginContext);
  const [items, setItems] = useState([]);

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

      localStorage.setItem("access-token", JSON.stringify(result));
      setAthu(true);

      // let datas = localStorage.getItem(result);
      // setaccessToken(datas);
      //       if(setaccessToken){setaccessToken(result.access_token);
      //       setAthu(true); }

      // else{
      //   console.log("error");
      // }
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
        <div className="logo-login">
          <img src={logoBlack} alt="logo" />
        </div>
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
          <button onClick={() => postJSON(data)}>login</button>
        </div>
       <button className="new-account">Create your Amazon account</button>
      </div>
    </>
  );
}
