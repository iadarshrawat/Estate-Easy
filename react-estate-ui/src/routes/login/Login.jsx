import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {

    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const {updateUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
  
      const username = formData.get("username");
      const password = formData.get("password");
      apiRequest.post("/auth/login", {username, password})
          .then(response => {
              updateUser(response.data);
              navigate('/');
          })
          .catch(err => {  
              console.error(err);
              setError(err.response.data.message);
          });
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;

