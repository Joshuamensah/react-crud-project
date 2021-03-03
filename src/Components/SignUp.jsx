import React, { Component } from "react";
import { connect} from 'react-redux'
import { Form, Button } from "react-bootstrap";
import {signUp} from '../actions/authActions';

class SignUp extends Component {
  constructor(props){
      super(props);
      this.state = {
          username: "",
          email: "",
          Password: "",
      };
  }
handleChange = (e) => {
    this.setState ({
        [e.target.name] : e.target.value,
    });
};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.setState ({
        username: "",
        email: "",
        Password: "",
    });
    
}

    render() {
    return (
      <div style= {{width: "30%", margin:"auto", marginTop: "100px"}}>
        <h1>Sign Up</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="Username">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              placeholder="Pasword"
              name="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}


const mapDispatchToProps = {
    signUp: signUp
};

export default connect(null, mapDispatchToProps)(SignUp);
