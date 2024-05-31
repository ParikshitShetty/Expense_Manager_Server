// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.ExpensesAdderController = async(req,res) => {
    try {
        const { exp_name, exp_amt, category, note, date } = req.body;
        const { userId } = req;
        console.log("exp_name, exp_amt, category, note, date, userId",exp_name,exp_amt,category,note,userId);
        const sqlQuery = 'INSERT INTO EXPENSE (user_id,exp_name,exp_amt,exp_created,exp_category,exp_note) VALUES (?,?,?,?,?,?)';
        const params = [userId,exp_name,exp_amt,date,category,note];
    
        const rows = await dbInstance.insert(sqlQuery, params);
        console.log("rows",rows)
        res.status(200).json({"data":rows});
    } catch (error) {
        console.log("error reading from db",error);
    }
}