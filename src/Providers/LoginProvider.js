import {createContext,useState} from "react";

export const loginContext = createContext({
  accessToken: null,
  setaccessToken: null,
  isAuthentication: null,
  setisAuthentication: null,
});

export function LoginProvider(props){
    const [accessToken,setaccessToken]=useState("");
    const [isAuthentication,setisAuthentication]=useState(false)
    return (
      <loginContext.Provider value={{ accessToken, setaccessToken,isAuthentication,setisAuthentication }}>
        {props.children}
      </loginContext.Provider>
    );
}