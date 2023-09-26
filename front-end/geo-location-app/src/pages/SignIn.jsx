import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header"

function SignIn({userInfo, setUserInfo}) {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        password: "",
        email: ""
    })

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const [hidden, setHidden] = useState(true)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        if(status){
            setTimeout(() => navigate("/home-page"), 1000)   
        }
    },[status])

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

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: forminfo,
        redirect: 'follow'
        };

        fetch("http://ai4fs.com.ng/geolocation/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setLoading(false);
            setStatus(result.status);
            setErrorMessage(result.message);
            setUserInfo(result.data);
        })
        .catch(error => {console.log('error', error)});
    }

    const handleClick = (e) => {
        setHidden(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formdata)
        setErrorMessage("")
        setLoading(true)
        console.log(formdata)
    }

  return (
    <div className="pages">
        <Header/>
        <h2>Sign In</h2>
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
                    <img src="./assets/images/Lock.svg" alt="" />
                    <label htmlFor="password">Password</label>
                </div>
                <input onChange={handleChange} className="text--input" type={hidden? "password" : "text"} id="password" name="password" placeholder="Enter your password" value={formdata.password}/>
                <img src="./assets/images/Hide.svg" alt="" className="hide" onClick={handleClick}/>
            </div>
            <p className={status? "success" : "error"} >{errorMessage}</p>
            <button className="sign-up">
                {loading? "loading..." : "SIGN IN"}
                <img src="./assets/images/Chevron Right.svg" alt="" className="chevronRight"/>
            </button>
        </form>
        <Link to="/sign-up">Do not have an account? Sign Up</Link>
    </div>
  )
}

export default SignIn