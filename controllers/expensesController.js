const express = require('express');
// Import singleton
const SQLiteSingleton = require('../sqliteSingleton');

// create an instance
const dbInstance = new SQLiteSingleton('../expenses.db');

// Middleware
const dateGetter = require('../middlewares/dateGetterMiddleware')

module.exports.ExpensesGetterController = async(req,res) => {
    try {     
        const { userId } = req;
        console.log("userId",userId);
       
        // const { next, prev } = await dateGetter();
        // console.log("date",next, prev);

        // const query = `SELECT * FROM EXPENSE WHERE user_id=${userId} and exp_created BETWEEN ${prev} and ${next}`;  
        const query = `SELECT * FROM EXPENSE WHERE user_id=${userId}`;  
        console.log(query);
        
        const rows = await dbInstance.select(query, []);
        console.log("rows getter",rows.length);
        res.status(200).json({"data":rows});
    } catch (error) {
        console.log("error reading from db",error);
        res.status(500).json({"message":error.message});
    }
}