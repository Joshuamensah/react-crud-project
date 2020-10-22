import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Joshua Mensah",
          email: "Joewy4me@yahoo.com",
          gen: 15,
          id: "094484fdfkjskks",
        },

        {
          name: "Susana Mensah",
          email: "Siawsusan84@gmail.com",
          gen: 10,
          id: "hfhfdkfd98833",
        },
        {
          name: "Agnes Siaw",
          email: "Siawagnes89@gmail.com",
          gen: 4,
          id: "nhff877370",
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
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
              <Users userData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
