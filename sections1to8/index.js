"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url)
    .then(function (resp) {
    var todo = resp.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logTodo(todo);
});
var logTodo = function (todo) {
    console.log("\n  The todo with ID: " + todo.id + " \n  has a title of: " + todo.title + ".\n  Is it finished: " + todo.completed + "\n  ");
};
function x(a) {
    return 2;
}
