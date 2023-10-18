import { Link } from "react-router-dom";
import "./Login.css"
const Login = () => {
  return (
    <div className="box-container">
      <div className="box">
        <span className="borderLine"></span>
        <form>
          <h2 className="text-2xl">Sign In</h2>
          <div className="inputBox">
            <input type="text" required="required" />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <Link to="/register" className="ln bt">Forgot Password</Link>
            <Link to="/register" className="ln bt">Sign Up</Link>
          </div>
          <button type="button" className="btn bt ms text-[#ff4605] hover:bg-[#ff4605] bg-[rgba(0,0,0,0.5)] hover:text-white font-bold text-base border-[#ff4605] normal-case">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
