import { Link } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet"

function HomePage({userInfo, emergency}) {


  return (
    <div className="pages homePage">
        {userInfo === undefined? <Link className="homepageSignup" to="/sign-in">SIGN IN</Link> : <p className="homepageSignup">Welcome, User!</p>}
        <div className="leaflet">
          <MapContainer style={{height: "100%", width: "100%"}} center={[26.209080,-80.112100]} zoom={13} scrollWheelZoom={false}>
            <TileLayer 
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />
            <Marker position={[26.209080,-80.112100]}>
              <Popup>user location</Popup>
            </Marker>
          </MapContainer>
        </div>
        <footer>
            <img className="smartphone" src="./assets/images/Smartphone Tablet.svg" alt="" />
            <img className="people" src="./assets/images/People.svg" alt="" />
            <Link to="/contacts"><img className="grayMaleUser" src="./assets/images/Gray Male User.svg" alt="" /></Link>
        </footer>
    </div>
  )
}

export default HomePage