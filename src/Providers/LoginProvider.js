import {createContext,useState} from "react";

export const loginContext=createContext([]);

export function LoginProvider(props){
    const [accessToken,setaccessToken]=useState("");
    const [isAuthentication,setisAuthentication]=useState(false)
    return (
      <loginContext.Provider value={{ accessToken, setaccessToken,isAuthentication,setisAuthentication }}>
        {props.children}
      </loginContext.Provider>
    );
}