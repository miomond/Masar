import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./auth"

export const RequireAuth = ({children})=> {
const Location =useLocation()
const Auth = useAuth()
if(!Auth){
    return <Navigate to={`/Login`} state={{path:location.pathname}}/>;
}
return children;
}