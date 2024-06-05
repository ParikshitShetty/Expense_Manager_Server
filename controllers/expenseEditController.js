// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.ExpenseEditController = async(req,res) => {
    try {
        const { exp_id,exp_name, exp_amt, category, note, date } = req.body;
        // const { userId } = req;
        console.log("exp_name, exp_amt, category, note, date, userId",exp_name,exp_amt,category,note);
        const sqlQuery = `UPDATE EXPENSE SET exp_name = ?,exp_amt= ? ,exp_created= ?,exp_category= ?,exp_note= ? WHERE exp_id=?`
        const params = [exp_name,exp_amt,date,category,note,exp_id];
    
        const rows = await dbInstance.update(sqlQuery, params);
        console.log("rows edited",rows)
        res.status(200).json({"data":rows});
    } catch (error) {
        console.log("error reading from db",error);
        res.status(404).json({"message":"error",err:error});
    }
}