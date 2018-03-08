import React from 'react';

const Managers = (props) => {
  const { managers } = props;
  return (
    <ul>
      {
        managers.map(manager => {
          return (
            <li key={manager.id}>
              {manager.name} manages:
              <ul>
                {manager.manages.map(managed => {
                  return (
                    <li key={managed.id}>
                      {managed.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Managers;
