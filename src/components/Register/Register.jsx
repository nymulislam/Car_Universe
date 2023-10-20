import { useContext } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, email, password };
    console.log(newUser);

    const hasMinimumLength = password.length >= 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);

    if (!hasMinimumLength) {
      toast.error("Password should be at least 6 characters long.", {
        position: "bottom-center",
      });
    } else if (!hasCapitalLetter) {
      toast.error("Password should contain at least one capital letter.", {
        position: "bottom-center",
      });
    } else if (!hasSpecialCharacter) {
      toast.error(
        "Password should contain at least one special character (!@#$%^&*).",
        {
          position: "bottom-center",
        }
      );
    } else {
      createUser(email, password, name)
        .then((result) => {
          console.log(result.user);
          swal("Good job!", "You have successfully registered.", "success");
          navigate("/");
          form.reset();
        })
        .catch((error) => {
          console.log(error);
          if (error.code === "auth/email-already-in-use") {
            toast.error("This email is already registered.", {
              position: "top-center",
            });
          } else {
            toast.error("Registration failed. " + error.message, {
              position: "bottom-center",
            });
          }
        });
    }
  };

  return (
    <div className="box-container register-box">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleRegister}>
          <h2 className="text-2xl">Sign Up</h2>
          <div className="inputBox">
            <input type="text" name="name" required="required" />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="email" name="email" required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" name="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links items-center">
            <span className="text-white">Already have an account?</span>
            <Link to="/login" className="ln bt">
              Login
            </Link>
          </div>
          <button className="btn bt ms text-[#ff4605] hover:bg-[#ff4605] bg-[rgba(0,0,0,0.5)] hover:text-white font-bold text-base border-[#ff4605] normal-case">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
