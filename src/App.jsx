import SocialLogin from "./components/SocialLogin"

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className="separator"><span>or</span></p>
      <form action="#" className="login-form">
      <div className="input-wrapper">
        <input type="email" placeholder="Email address"
         className="input-field" required />
         <i className="material-symbols-rounded">mail</i>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder="Password"
         className="input-field" required />
         <i className="material-symbols-sharp">vpn_key</i>
      </div>
      <a href="#" className="forgot-pass-link">Forgot Password?</a>
      <button className="login-button">Log in</button>
      
      </form>
      <p className="signup-text">Don't have an account? <a href="#">Signup now</a></p>
    </div>
  )
}

export default App
