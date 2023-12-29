import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"


const ProtectComponent = () => {
  const jwtToken = Cookies.get("jwtToken")
  return jwtToken? <Outlet/> : <Navigate to = "/login"/>
 }
export default ProtectComponent