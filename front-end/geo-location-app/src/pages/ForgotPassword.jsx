import Header from "../components/Header"

function ForgotPassword() {
  return (
    <div className="pages">
        <Header/>
        <h2>Forgot Password</h2>
        <p className="please-verify">Please input your account details. A verification code will be sent to your email.</p>
        <form action="">
          <input className="text--input" type="email" id="email" name="email" placeholder="Enter your email" />
          <button className="next">
            Next  
          </button>
        </form>
    </div>
  )
}

export default ForgotPassword