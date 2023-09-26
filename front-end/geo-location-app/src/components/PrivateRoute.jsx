import { Navigate, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function PrivateRoute({userInfo}) {
    const [loggedin, setLoggedin] = useState(false)

  return userInfo === undefined ? <Navigate to="/sign-in" /> : <Outlet/>
}

export default PrivateRoute