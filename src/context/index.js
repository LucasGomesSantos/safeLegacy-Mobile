import { useContext, createContext, useState } from 'react'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const handleLogin = (data) => {
        console.log(data)
        setUser(data)
    }

    return (
        <AuthContext.Provider value={{
            handleLogin,
            user,
            isAuthenticated: !!user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context
}