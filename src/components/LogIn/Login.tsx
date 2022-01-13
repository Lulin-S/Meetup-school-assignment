import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const mockData = [
    { username: "Bob", password: "qwerty" },
    { username: "Bob", password: "secret" },
    { username: "Jag", password: "12345" },
  ];
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  function verifyLogin() {
    const correctUsername = mockData.filter(
      (data) => data.username === userName
    );
    const correctPassword = correctUsername.filter(
      (data) => data.password === password
    );
    if (correctPassword[0]) {
      setRes(`Welcome ${correctPassword[0].username}`);
    } else {
      setRes("Invalid username or password");
    }
  }

  function submit(event: any) {
    event.preventDefault();
    verifyLogin();
  }
  return (
    <div>
      <Link to="/" className={styles.eventLogo}>
        Meetup
      </Link>
      <div>
        <form action="" className={styles.loginContanier}>
          <label style={{ fontSize: 28, marginBottom: 20 }}>Log in</label>
          <label>Username</label>
          <input
            className={styles.inputContanier}
            type="text"
            name="username"
            onChange={(event) => setUserName(event.target.value)}
          />
          <label>Password </label>
          <input
            className={styles.inputContanier}
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className={styles.inputContanier} onClick={submit}>
            Login
          </button>
          <label>
            Don't have an account yet? Register <Link to="/register">here</Link>
          </label>
        </form>
        <p id="response">{res}</p>
      </div>
    </div>
  );
}
