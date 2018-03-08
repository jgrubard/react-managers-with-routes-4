const { Sequelize, _conn } = require('./conn.js')

const Employee = _conn.define('employee', {
  name: Sequelize.STRING
}, {
  timestamps: false
})

module.exports = Employee;
