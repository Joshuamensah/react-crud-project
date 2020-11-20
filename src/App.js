import React, { Component } from "react";
import { connect } from 'react-redux'
import { addUser } from './store/UsersActions'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";
import "./App.css";

class App extends Component {
  
  addNewUser = (newUser) => {
    //user.id = Math.random().toString();
    this.props.addUser(newUser)
  };

  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>ADD USERS</h4>
              <br/>
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
            <h4>ALL CODETRAIN USERS</h4>
            <br/>
              <Users userData={this.props.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapStateToProps =(state) => ({
  users: state.users
});

const mapDispatchToProps = {
  addUser: addUser
}

export default  connect (mapStateToProps, mapDispatchToProps)(App);
