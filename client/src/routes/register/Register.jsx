import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {

  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    apiRequest.post("/auth/register", {username, email, password})
        .then(response => {
            console.log(response.data.message); // Success message
            navigate('/login');
        })
        .catch(err => {
            console.error(err);
            setError(err.response.data.message);
        });
};

  // const handleSubmit = async (e) => {
  //   const formData = new FormData(e.target);

  //   const username = formData.get("username");
  //   const email = formData.get("email");
  //   const password = formData.get("password");

  //   try {
  //     const res = await axios.post("http://localhost:8800/api/auth/register", {
  //       username, email, password
  //     }).then(response=>{
  //       console.log(response)
  //     })

  //     console.log("hello");

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>

          {error && <span>{error}</span>}

          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
