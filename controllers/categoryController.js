// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.CategoryController = (req,res) => {
    dbInstance.select('SELECT * FROM CATEGORY', [], (err, rows) => {
        if (err) {
            console.error(err.message);
        return;
    }
        console.log("CATEGORY",rows);
        res.status(200).json({"CATEGORY":rows})
    });
}