const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 5000;

// Parse Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// Import singleton
const SQLiteSingleton = require('./sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('./expenses.db');

// Import routes
const expenses = require('./routes/expensesRoute');
const user = require('./routes/userRoute');
const category = require('./routes/categoryRoute');

app.use('/expenses/',expenses);
app.use('/user/',user);
app.use('/category/',category);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})