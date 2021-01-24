import React, { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = (props)=>{
    const [users, setUsers] = useState([
        {id: 1, name: "Harun", position: "Front End Dev.", salary: 28000},
        {id: 2, name: "Rubel", position: "Front End Dis.", salary: 24000},
        {id: 3, name: "Harun", position: "J. Front End Dev.", salary: 20000}
    ]);

    return(
        <UserContext.Provider value= {[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};