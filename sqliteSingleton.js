const sqlite3 = require('sqlite3').verbose();

class SQLiteSingleton {
  constructor(databasePath) {
    if (!SQLiteSingleton.instance) { //Check if the instance is present
      this.db = new sqlite3.Database(databasePath);
      SQLiteSingleton.instance = this;
      
      console.log("Connected to database");
    }
    // If an instance is present then return that
    return SQLiteSingleton.instance;
  }

  // SELECT query
  select(sql, params, callback) {
    return this.db.all(sql, params, callback);
  }

  // INSERT query
  insert(sql, params, callback) {
    return this.db.run(sql, params, function(err) {
      callback(err, this.lastID);
    });
  }

  // DELETE query
  delete(sql, params, callback) {
    return this.db.run(sql, params, function(err) {
      callback(err, this.changes);
    });
  }

  // UPDATE query
  update(sql, params, callback) {
    return this.db.run(sql, params, function(err) {
      callback(err, this.changes);
    });
  }
}

module.exports = SQLiteSingleton;