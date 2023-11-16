import { useContext, createContext, useState } from 'react'
import axios from 'axios'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const urlBase = 'https://safelegacy-backend-develop.up.railway.app'

    const handleLogin = async (data) => {
        try {
            const response = await axios.post(`${urlBase}/customer/login`, data);
            console.log(response.data);
            setUser(response.data)
        } catch (error) {
            console.log("error: ", error);
        }
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