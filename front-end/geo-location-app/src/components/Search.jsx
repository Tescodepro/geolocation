

function Search() {
  return (
    <form className="search--div">
            <img className="search--icon" src="./assets/images/Search.svg" alt="" />
            <input type="text" name="search" id="search" className="search" placeholder="Search"/>
            <img className="microphone" src="./assets/images/Microphone.svg" alt="" />
    </form>
  )
}

export default Search