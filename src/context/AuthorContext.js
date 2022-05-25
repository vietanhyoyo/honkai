import React from "react";

const AuthorContext = React.createContext(defaultValue);

const AuthorProvider = ({ children }) => {

    const [author,setAuthor] = React.useState({})

    return (
        <AuthorContext.Provider value={{
            author
        }}>
            {children}
        </AuthorContext.Provider>
    );
}

export { AuthorContext, AuthorProvider }