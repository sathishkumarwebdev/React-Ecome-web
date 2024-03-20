import { React } from "react";
import { useState } from "react";
let userName = "sathish";
let userPassword = "12345";
export function Login({ setAthu }) {
  //hooks
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    if (userName === name && userPassword === password) {
      setAthu(true);
    } else {
      alert("try Agin");
    }
  }

  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div>
        <input value={name} onChange={handleUserName} placeholder="username" />
        <input
          value={password}
          onChange={handlePassword}
          placeholder="password"
          type="password"
        />
        <button onClick={handleClick}>submit</button>
      </div>
    </>
  );
}
