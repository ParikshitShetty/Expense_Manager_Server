// Import singleton
const { use } = require('../routes/expensesRoute');
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

module.exports.UsersGetterController = (req,res) => {
    dbInstance.select('SELECT * FROM USER', [], (err, rows) => {
        if (err) {
            console.error(err.message);
        return;
    }
        console.log("USER",rows);
        res.status(200).json({"USER":rows})
    });
}

module.exports.SignupController = (req,res) => {
    const { user_id,user_name,password } = req.body;
    const query = "INSERT INTO USER (user_id,user_name,password) VALUES (?,?,?)";
    const options = [user_id,user_name,password];

    dbInstance.insert(query, options, (err, rows) => {
        if (err) {
            console.error(err.message);
        return;
    }
        console.log("USER",rows);
        res.status(200).json({"USER":rows})
    });
}

module.exports.LoginController = (req,res) => {
    const { user_id,password } = req.body;
    console.log("user_id,password",user_id,password);

    const query = `SELECT * FROM USER WHERE user_id=${user_id}`;

    dbInstance.select(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
        return;
    }
        console.log("USER",rows);
        res.status(200).json({"USER":rows})
    });
}