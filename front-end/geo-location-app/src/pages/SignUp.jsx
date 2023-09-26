import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

function SignUp() {
    const [formdata, setFormdata] = useState({
        password: "",
        email: "",
        phone: ""
    })

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [status, setStatus] = useState(false)

    const handleChange = e => {
        const {value, name} = e.target
        setFormdata(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submitForm = async (applicationData) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var forminfo = new FormData();
        forminfo.append("password", applicationData.password);
        forminfo.append("email", applicationData.email);
        forminfo.append("phone", applicationData.phone);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: forminfo,
        redirect: 'follow'
        };

        fetch("http://ai4fs.com.ng/geolocation/api/register", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setLoading(false);
            setStatus(result.status);
            setErrorMessage(result.message);
        })
        .catch(error => console.log('error', error));
    }

    const handleClick = (e) => {
        setHidden(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formdata);
        setErrorMessage("");
        setLoading(true);
        console.log(formdata);
    }

  return (
    <div className="pages">
        <Header/>
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <div className="label">
                    <img src="./assets/images/Person.svg" alt="" />
                    <label htmlFor="email">Email</label>
                </div>
                <input onChange={handleChange} className="text--input" type="email" id="email" name="email" placeholder="Enter your email" value={formdata.email}/>
            </div>
            <div>
                <div className="label">
                    <img src="./assets/images/Person.svg" alt="" />
                    <label htmlFor="phone">Phone Number</label>
                </div>
                <input onChange={handleChange} className="text--input" type="text" id="phone" name="phone" placeholder="Enter your phone number" value={formdata.phone}/>
            </div>
            <div>
                <div className="label">
                    <img src="./assets/images/Lock.svg" alt="" />
                    <label htmlFor="password">Password</label>
                </div>
                <input onChange={handleChange} className="text--input" type={hidden? "password" : "text"} id="password" name="password" placeholder="Enter your password" value={formdata.password}/>
                <img src="./assets/images/Hide.svg" alt="" className="hide" onClick={handleClick}/>
            </div>
            <p className={status? "success" : "error"} >{errorMessage}</p>
            <button className="sign-up">
                SIGN UP
                <img src="./assets/images/Chevron Right.svg" alt="" className="chevronRight"/>
            </button>
        </form>
        <Link to="/sign-in">Have an account? Sign In</Link>
    </div>
  )
}

export default SignUp