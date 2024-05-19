// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.ExpensesRemoverController = async(req,res) => {
    const {exp_id} = req.body;
    const query = `DELETE FROM EXPENSE WHERE exp_id=${exp_id}` ;

    try {
        const rows = await dbInstance.delete(query, []);
        console.log("rows",rows);
        res.status(200).json({"data":rows});
    } catch (error) {
        console.log("error reading from db",error);
    }
}