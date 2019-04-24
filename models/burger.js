var orm = require("../config/orm.js");

var burger = {
  selectAll: orm.selectAll("burgers"),

  insertOne: orm.insertOne("burgers", "burger_name", "devoured", burgerName, devour),

  updateOne: orm.updateOne("burgers", "burger_name", "devoured", burgerName, devour, id)

};

module.exports = burger;
