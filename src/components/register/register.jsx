import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission

    const data = {
      FirstName,
      LastName,
      email,
      password,
      username: email,
    };

    try {
      //make a post request to the beckend api
      const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        data
      );
      // Reset our state
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      //console.log(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }

    //console.log(data);

    //console.log("FirstName:", FirstName);
    //console.log("LastName:", LastName);
    //console.log("Email:", email);
    //console.log("Password:", password);
    //console.log("ConfirmPasword:", confirmPassword);
  };

  return (
    <form className="form form--page" onSubmit={handleSubmit}>
      <div className="form__group form__group--page">
        <label className="form__label">First name</label>
        <input
          className="form__field"
          type="text"
          placeholder="First name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Last name</label>
        <input
          className="form__field"
          type="text"
          placeholder="Last name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Email</label>
        <input
          className="form__field"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Choose password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Choose password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <label className="form__label">Confirm Password</label>
        <input
          className="form__field"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="form__group form__group--page">
        <input className="form__btn" type="submit" value="Register" />
      </div>

      <footer>
        Already have an account? <Link to="/login">Login</Link>
      </footer>
    </form>
  );
}
