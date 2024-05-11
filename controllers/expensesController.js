// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.ExpensesGetterController = (req,res) => {
    dbInstance.select('SELECT * FROM EXPENSE', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.json({"Error":err.message})
        return;
    }
        console.log("Expenses",rows);
        res.status(200).json({"Expenses":rows})
    });
}


module.exports.ExpensesAdderController = (req,res) => {
    const {exp_id,user_id,exp_name,exp_amt,exp_created,exp_category,exp_note} = req.body;
    const sql = 'INSERT INTO EXPENSE (exp_id,user_id,exp_name,exp_amt,exp_created,exp_category,exp_note) VALUES (?,?,?,?,?,?,?)';
    // dataype = [4, 10,'dididid',76.60,'09-05-2024','2320','personal'];
    const params = [exp_id,user_id,exp_name,exp_amt,exp_created,exp_category,exp_note];
    
    dbInstance.insert(sql, params, (err, rows) => {
        if (err) {
            console.error(err.message);
            res.json({"Error":err.message})
        return;
    }
        console.log("Expenses Inserted",rows);
        res.status(200).json({"Expenses added":rows})
    });
}