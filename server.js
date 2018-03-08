const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const Employee = require('./db/Employee.js')

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/employees', (req, res, next) => {
  Employee.findAll({
    include: [
      { model: Employee, as: 'manager' },
      { model: Employee, as: 'manages' }
    ]
  })
  .then(result => res.json(result))
  .catch(next);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`** Listening on Port ${port} **`));

db.sync()
  .then(() => db.seed())
