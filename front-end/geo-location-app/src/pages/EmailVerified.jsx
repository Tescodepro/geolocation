import Header from "../components/Header"

function EmailVerified() {
  return (
    <div className="pages">
        <Header/>
        <div className="ok--div">
            <img className="ok" src="./assets/images/Ok.svg" alt="" />
        </div>
        <p className="email-verified">Email Verified</p>
    </div>
  )
}

export default EmailVerified