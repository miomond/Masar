import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null);

export const AuthProvider =({children})=>{
    const [user,setUser] = useState(false);
    const Login = (user)=>{
        setUser(user);
        localStorage.setItem("token", token);
    }

    const Logout = ()=>{
        setUser(null);
        localStorage.removeItem("token");
    }


    return(
        <AuthContext.Provider value={{user , Login , Logout}}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = ()=>{
    return useContext(AuthContext)
}



