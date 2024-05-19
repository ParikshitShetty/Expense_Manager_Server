const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config()

// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');
// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.UsersGetterController = async(req,res) => {
    try {
        const rows = await dbInstance.select('SELECT * FROM USER', [])
        console.log("rows",rows)
        res.status(200).json({"data":rows});
    } catch (error) {
        console.log("error reading from db",error);
        res.status(500).json({ error: "Cannot get users" });
    }
}