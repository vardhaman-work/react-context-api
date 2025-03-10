import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const abcFn = () => {
        alert("Form Submited")
    }

    return (
        <UserContext.Provider value={{user, setUser, abcFn}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;