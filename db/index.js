const { _conn } = require('./conn.js');
const Employee = require('./Employee.js');

Employee.belongsTo(Employee, { as: 'manager' });
Employee.hasMany(Employee, { as: 'manages', foreignKey: 'managerId'});

const sync = () => {
  return _conn.sync({ force: true });
}

const seed = () => {
  return Promise.all([
    Employee.create({ name: 'Mario' }),
    Employee.create({ name: 'Luigi' }),
    Employee.create({ name: 'Bowser' })
  ])
  .then(([ Mario, Luigi, Bowser ]) => {
    return Promise.all([
      Mario.setManager(Bowser),
      Luigi.setManager(Bowser)
    ])
  })
}

module.exports = {
  sync,
  seed
}
