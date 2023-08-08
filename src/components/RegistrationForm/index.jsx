import { useDispatch } from "react-redux";
import "./index.css";
import React, { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpassword] = useState("");
    
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        e.preventDefault();

        dispatch(
            login({
                name: username,
                email: useremail,
                password: userpassword
            })
        )
    }

    return ( 
    <>
    <h2>Please register in order to Log-in</h2>
    <form className="form-container">
        <label className="form-label">Email: </label>
        <input
        type="email"
        name="email"
        value={useremail}
        onChange={(e) => setUseremail(e.target.value)}
        />

        <label className="form-label">Username: </label>
        <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <label className="form-label">Password: </label>
        <input
        type="password"
        name="password"
        value={userpassword}
        onChange={(e) => setUserpassword(e.target.value)}
        />
        <button className="registration-button" type="submit" onClick={handleSubmit}>Register</button>
    </form>
    </>
    );
}
 
export default RegistrationForm;