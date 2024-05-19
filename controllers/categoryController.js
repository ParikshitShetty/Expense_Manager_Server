// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.CategoryController = async(req,res) => {
    try {
        const rows = await dbInstance.select('SELECT * FROM CATEGORY', []);
        console.log("rows",rows);
        res.status(200).json({"data":rows});
    } catch (error) {
        console.log("error reading from db",error);
    }
}