const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config()

// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');
// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.LoginController = async(req,res) => {
    try {
        const { user_name,password } = req.body;
    
        const query = `SELECT * FROM USER WHERE user_name="${user_name}"`;
           
        const rows = await dbInstance.select(query, []);
        console.log("rows",rows)
        bcrypt.compare(password, rows[0].password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return;
            }
        
            if (result) {
                // Passwords match, authentication successful
                console.log('Passwords match! User authenticated.');
                const token = jwt.sign({ user_name: user_name }, env.parsed.Secret_Key, {
                    expiresIn: '12h',
                });
                res.cookie('user_name', user_name, { maxAge: 900000, httpOnly: true });
                    
                res.status(200).json({"USER":"Authenticated.","token":token });
            } else {
                // Passwords don't match, authentication failed
                console.log('Passwords do not match! Authentication failed.');
                // res.status(404).json({"USER":"doesn't match."});
                return res.status(401).json({ error: 'Authentication failed' });
            }
        })
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}