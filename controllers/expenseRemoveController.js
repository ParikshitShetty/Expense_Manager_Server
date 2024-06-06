// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.ExpensesRemoverController = async(req,res) => {
    const {exp_id} = req.body;
    const query = `DELETE FROM EXPENSE WHERE exp_id=${exp_id}` ;

    try {
        const rows = await dbInstance.delete(query, []);
        console.log("rows removed",rows);
        res.status(200).json({"exp_id":rows});
    } catch (error) {
        console.log("Error reading from db",error);
        res.status(500).json({ error: 'Errow while removing expense' });
    }
}