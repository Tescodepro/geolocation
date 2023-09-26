import Header from "../components/Header"

function EmailVerification() {
  return (
    <div className="pages">
        <Header/>
        <h2>Verify Code</h2>
        <p className="please-verify">Please verify your account by entering the code sent to adetoyeseho@gmail.com</p>
        <div className="code--div">
            <div className="numbers">1</div>
            <div className="numbers">2</div>
            <div className="numbers">3</div>
            <div className="numbers">4</div>
        </div>
        <p className="resend--code">Resend Code in 00:49</p>
    </div>
  )
}
export default EmailVerification