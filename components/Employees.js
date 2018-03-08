import React from 'react';

const Employees = (props) => {
  const { employees } = props;
  return (
    <div>
      <ul>
        {
          employees.map(employee => {
            const manager = employee.manager ? (
                ` is managed by ${employee.manager.name}`
              ) : (
                ` has no manager`
              );
            return (
              <li key={employee.id}>
                <strong>{ employee.name }</strong>{manager}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Employees;
