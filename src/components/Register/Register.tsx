import React, { useState } from "react"
import "./register.css"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  })

  const { name, surname, email, password } = formData

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault()
    try {
      console.log(formData)
      const response = await fetch("http://localhost:3005/users/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setFormData({
          name: "",
          surname: "",
          email: "",
          password: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const signUpForm = () => {
    return (
      <div className="d-flex flex-column mt-4">
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="login-input-wrap mb-4">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={surname}
              placeholder="Enter surname"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="login-input-wrap mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="login-input-wrap mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }

  return (
    <div
      id="login-main-container"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <div className="login-top-container d-flex align-items-center justify-content-start">
          <div className="login-title d-flex mb-3">
            <h4>The Weather</h4>
            <i className="fab fa-linkedin ml-1"></i>
          </div>
        </div>
        <div className="signup-content-container mb-5">
          <div className="mb-4">
            <h2 className="mb-1">Sign up</h2>
          </div>
          {signUpForm()}
        </div>
      </div>
    </div>
  )
}
export default Register
