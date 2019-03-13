const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const authentication = require('./server/controllers/authentication');
const Todo = require('./server/controllers/todos');
const TodoItem = require('./server/controllers/todoItems');
const Comment = require('./server/controllers/comment')
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to toDo App.',
}));


app.get('/getUsers', async function(req, res) {
    const users = await User.findAll({raw: true});
    res.send(users)
})

//routes for authentication
app.post('/signup', authentication.signup);
app.post('/login', authentication.login);

// routes for todo
app.post('/todos', Todo.createTodo);
app.get('/todos/list', Todo.list);
app.get('/todos/retrieve', Todo.retrieve);



// routes for todoItems
app.post('/todoItems', TodoItem.createTodoItems);

//routes for comment
app.post('/comments', Comment.createComments);

module.exports = app;