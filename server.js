const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

// Enable cors
app.use(cors({
  origin:[
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    "https://expense-manager-frontend-wine.vercel.app",
    "https://expense-manager-git-ba00bf-parikshit-shettys-projects-7026150a.vercel.app",
    "https://expense-manager-frontend-parikshit-shettys-projects-7026150a.vercel.app",
    "https://expense-manager-frontend-b2a0zf1bu.vercel.app"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the methods you need
  allowedHeaders: ['Content-Type'],
  credentials:true,
  exposedHeaders:['Set-Cookie']
}));

// Enable cookie parser
app.use(cookieParser());
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

// define routes
app.use('/expenses/',expenses);
app.use('/user/',user);
app.use('/category/',category);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})