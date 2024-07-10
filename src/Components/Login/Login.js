import React, { useState } from 'react';
import './Login.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPersonFill, BsLockFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate()

  function userNameInputChangeHandler(e) {
    setUsername(e.target.value);
  }

  function passwordInputChangeHandler(e) {
    setPassword(e.target.value);
  }

  function userSubmit() {
    let siteUser

    axios.get('https://fakestoreapi.com/users')
      .then(res => {
        siteUser = res.data.find(user => {
          return user.username === username && user.password === password
        });

        if (siteUser) {
          localStorage.setItem('userInfo', JSON.stringify(siteUser))
          localStorage.setItem('userCart', JSON.stringify([]))
          navigate('/')
        } else {
          alert('your username, password not correct')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col md={4} className="login-container">
          <h2 className="myfont text-center mb-5 display-5">Login</h2>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label fs-5"><BsFillPersonFill /> Username</label>
            <input type="text" className="form-control" id="usernameInput" value={username} onChange={(event) => userNameInputChangeHandler(event)} />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label fs-5"><BsLockFill /> Password</label>
            <input type="password" className="form-control" id="passwordInput" rows="3" value={password} onChange={(event) => passwordInputChangeHandler(event)} />
          </div>
          <p>Forget password?</p>
          <button className="btn login-btn mt-4 fs-5" onClick={userSubmit}>Submit</button>
        </Col>
      </Row>
    </Container>
  )
}
