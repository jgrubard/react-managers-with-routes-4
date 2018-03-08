import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';

import Nav from './Nav.js';
import Employees from './Employees.js';
import Managers from './Managers.js';

const Home = () => <div>Home</div>

class App extends Component {
  constructor() {
    super();
      this.state = {
        employees: [],
        managers: []
      }
  }

  componentDidMount() {
    axios.get('/api/employees')
      .then(result => result.data)
      .then(employees => {
        const managers = employees.filter(employee => {
          if (employee.manages.length) {
            return employee;
          }
        })
        this.setState({ employees, managers })
      })
      .catch(err => console.error(err));
  }

  render() {
    const { employees, managers } = this.state;
    return (
      <Router>
        <div>
          <h1>Acme Employees and Managers REACT</h1>
          <Route component={ (props) => <Nav location={props.location} employees={ employees } managers={ managers } /> } />
          <Route exact path='/' render={ Home }/>
          <Route exact path='/employees' render={ () => <Employees employees={ employees }/> } />
          <Route exact path='/managers' render={ () => <Managers managers={ managers } />} />
        </div>
      </Router>
    );
  }
}

export default App;
