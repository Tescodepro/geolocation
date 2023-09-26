

function EditProfile() {
  return (
    <div className="pages">
        <div className="user--div">
            <img className="male-user" src="./assets/images/Male User.svg" alt="" />
        </div>
        <p className="edit-profile">Edit Profile</p>
        <form action="">
            <div>
                <div className="label">
                    <label htmlFor="firstName">First Name</label>
                </div>
                <input className="text--input" type="text" id="firstName" name="firstName" />
            </div>
            <div>
                <div className="label">
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <input className="text--input" type="text" id="lastName" name="lastName" />
            </div>
            <div>
                <div className="label">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                </div>
                <input className="text--input" type="date" id="dateOfBirth" name="dateOfBirth" />
            </div>
            <div>
                <div className="label">
                    <label htmlFor="gender">Gender</label>
                </div>
                <input className="text--input" type="text" id="gender" name="gender" />
            </div>
            <div>
                <div className="label">
                    <label htmlFor="dateOfBirth">Email</label>
                </div>
                <input className="text--input" type="email" id="email" name="email" />
            </div>
            <div>
                <div className="label">
                    <label htmlFor="location">Location</label>
                </div>
                <input className="text--input" type="text" id="location" name="location" />
            </div>
            <button className="next">
                Save Changes  
            </button>
        </form>
    </div>
  )
}

export default EditProfile