import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"

function AddContact({userInfo, setUserInfo}) {
    const [formdata, setFormdata] = useState({
        name: "",
        phone: ""
    })

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false)
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
        myHeaders.append("Authorization", `Bearer ${userInfo.token}`);

        var forminfo = new FormData();
        forminfo.append("name", applicationData.name);
        forminfo.append("phone", applicationData.password);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: forminfo,
        redirect: 'follow',
        };

        fetch("http://ai4fs.com.ng/geolocation/api/add_contact", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setLoading(false)
            setStatus(result.status);
            setErrorMessage(result.message);
        })
        .catch(error => {console.log('error', error)});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formdata)
        setErrorMessage("")
        setLoading(true)
        console.log(formdata)
        console.log(formdata.phone.length)
        console.log(userInfo.token)
    }

  return (
    <div className="pages">
        <Header/>
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <div className="label">
                    <img src="./assets/images/Person.svg" alt="" />
                    <label htmlFor="name">Name</label>
                </div>
                <input onChange={handleChange} className="text--input" type="text" id="name" name="name" placeholder="Enter contact's name" value={formdata.name}/>
            </div>
            <div>
                <div className="label">
                    <img src="./assets/images/Keypad.svg" alt="" />
                    <label htmlFor="password">Phone</label>
                </div>
                <input onChange={handleChange} className="text--input" type="text" id="phone" name="phone" placeholder="Enter contact's phone" value={formdata.phone}/>
            </div>
            <p className={status? "success" : "error"} >{errorMessage}</p>
            <button className="sign-up">
                {loading? "loading..." : "ADD"}
                <img src="./assets/images/Chevron Right.svg" alt="" className="chevronRight"/>
            </button>
        </form>
        <Link to="/contacts">Back</Link>
    </div>
  )
}

export default AddContact