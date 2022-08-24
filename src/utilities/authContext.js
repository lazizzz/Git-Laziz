import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
     const [currentUser,setCurrentUser] = useState();

     const logOut = () => {
        setCurrentUser(null);
     }; 
     const value = {currentUser,setCurrentUser,logOut};
     return <AuthContext.Provider value={value} >{props.children}</AuthContext.Provider>
};

export default AuthProvider