import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import Header from "../components/Header"

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home-page"), 3000)
  },[])

  return (
    <div className="pages splash">
        <Header/>
        <div className="elipse--div">
            <div className="elipse"></div>
            <div className="elipse"></div>
            <div className="elipse active"></div>
        </div>
    </div>
  )
}

export default Splash