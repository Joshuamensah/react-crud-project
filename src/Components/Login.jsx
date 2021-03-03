import React, { Component } from "react";
import {connect} from 'react-redux'
import {loginUser} from '../actions/authActions';
import { Form, Button } from "react-bootstrap";
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
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
    this.props.login(this.state.email, this.state.password);
}

    render() {
      if (this.props.auth.isLoaded && !this.props.auth.isEmpty){
        return <Redirect to="/"/>;
      }
    return (
      <div style= {{width: "30%", margin:"auto", marginTop: "100px"}}>
        <h1>Login</h1>
        <br />
        <Form onSubmit={this.handleSubmit}>
          
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
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth
})

const mapDispatchToProps = {
  login: loginUser
}


export default connect (mapStateToProps, mapDispatchToProps) (Login);
