import { useState } from "react"

function ToggleButton() {
    const [toggleCircle, setToggleCircle] = useState(false)

    const handleCircleClick = (e) => {
        setToggleCircle(prev => !prev)
    }  

  return (
    <div className="toggle--button" onClick={handleCircleClick}><div className={toggleCircle ? "tiny--circle--yearly" : "tiny--circle--monthly"}></div></div>
  )
}

export default ToggleButton