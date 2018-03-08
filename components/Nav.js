import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const path = props.location.pathname;
  const { employees, managers } = props;
  return (
    <div>
      <ul>
        <li>
          {
            path === '/' ? (
              <span>Home</span>
            ) : (
              <Link to='/'>Home</Link>
            )
          }
        </li>
        <li>
          {
            path === '/employees' ? (
              <span>Employees: { employees.length }</span>
            ) : (
              <Link to='/employees'>Employees: { employees.length }</Link>
            )
          }
        </li>
        <li>
          {
            path === '/managers' ? (
              <span>Managers: { managers.length }</span>
            ) : (
              <Link to='/managers'>Managers: { managers.length }</Link>
            )
          }
        </li>
      </ul>
    </div>
  );
}

export default Nav;
