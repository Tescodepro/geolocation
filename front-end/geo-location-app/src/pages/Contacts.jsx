import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Search from "../components/Search"
import ContactItem from "../components/ContactItem"

function Contacts({userInfo, emergency, setEmergency}) {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    getContacts()
    getEmergency()
  },[])

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${userInfo.token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const getContacts = () => {
    fetch("http://ai4fs.com.ng/geolocation/api/view_contact", requestOptions)
      .then(response => response.json())
      .then(result => {
        setContacts(result.data.contacts);
      })
      .catch(error => console.log('error', error));
  }

  const getEmergency = () => {
    fetch("http://ai4fs.com.ng/geolocation/api/viewEmergency", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setEmergency(result.data.emmergency_contact)
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className='pages contacts'>
        <p className="edit-profile contacts">Contacts</p>
        <Link to="/home-page" className="back--div">
            <img className="chevronLeft-b" src="./assets/images/Chevron Left.svg" alt="" />
            <p className='back'>Back</p>
        </Link>
        <Search/>
        <div className="contact--div">
          {contacts.map(e => {
            return <ContactItem key={e.id} ContactInfo={e} />
          }) }
        </div>
        <footer>
            <Link to="/add-contact" className="addContact">Add Contact</Link>
        </footer>  
    </div>
  )
}

export default Contacts