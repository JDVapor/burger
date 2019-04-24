var connection = require("./connection.js");

var orm = {

  selectAll: tableInput => {
    return new Promise((resolve, reject) => {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, [tableInput], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  insertOne: (tableInput, colOneName, colTwoName, burgerName, devour) => {
    return new Promise((resolve, reject) => {
      var queryString = "INSERT INTO ??(??, ??) VALUES(??, ??);";
      connection.query(queryString, [tableInput, colOneName, colTwoName, burgerName, devour], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  updateOne: (tableInput, colOneName, colTwoName, burgerName, devour, condition) => {
    return new Promise((resolve, reject) => {
      var queryString = "UPDATE ?? SET ?? = ??, ?? = ?? WHERE id = ??";
      connection.query(queryString, [tableInput, colOneName, burgerName, colTwoName, devour, condition], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

};

module.exports = orm;
