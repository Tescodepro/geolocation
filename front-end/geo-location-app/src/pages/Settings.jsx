import ToggleButton from "../components/ToggleButton"
import Search from "../components/Search"

function Settings() {
  return (
    <div className="pages settings">
        <p className="edit-profile">Settings</p>
        <img className="chevronLeft" src="./assets/images/Chevron Left.svg" alt="" />
        <Search />
        <div className="settings--div">
            <div className="settings--contents">
                <p>Offline maps settings</p>
                <ToggleButton/>
            </div>
            <div className="settings--contents">
                <p>Maps history</p>
            </div>
            <div className="settings--contents">
                <p>Navigation settings</p>
            </div>
            <div className="settings--contents">
                <p>Show scale on map</p>
            </div>
            <div className="settings--contents">
                <p>Start maps in satellite view</p>
                <ToggleButton/>
            </div>
            <div className="settings--contents">
                <p>Location accuracy tips</p>
            </div>
            <div className="settings--contents">
                <p>About, terms & privacy</p>
            </div>
            <div className="settings--contents">
                <p>Sign Out</p>
            </div>
        </div>
    </div>
  )
}

export default Settings