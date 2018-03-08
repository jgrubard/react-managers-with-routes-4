const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react_managers_with_routes_4_db')

module.exports = {
  Sequelize,
  _conn
}
