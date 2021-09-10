import React, { createContext, useState } from 'react';

interface UserProps {
    firstName: string;
    lastName: string;
}

interface UserContextProps {
    state: UserProps;
    setState: React.Dispatch<React.SetStateAction<UserProps>>;
}

const DEFAULT_VALUE = {
    state: {
        firstName: "Chuck",
        lastName: "Norris"
    },
    setState: () => { }
}

const UserContext = createContext<UserContextProps>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <UserContext.Provider value={{ state, setState }}>{children}</UserContext.Provider>
    )
}

export { UserContextProvider, UserContext }