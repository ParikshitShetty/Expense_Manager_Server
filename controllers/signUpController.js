const bcrypt = require('bcrypt');

// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');
// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

const saltRounds = 10;
module.exports.SignupController = async(req,res) => {
    try {
        const { email,user_name,password } = req.body;

        const query = "INSERT INTO USER (email,user_name,password) VALUES (?,?,?)";

        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const options = [email,user_name,hashedPassword];
        
        const rows = await dbInstance.insert(query, options);
       
        res.status(200).json({"message":"Error while sign up","data":rows});
        
    } catch (error) {
        console.error('Signup failed',error)
        res.status(500).json({ error: 'Signup failed' });
    }
}