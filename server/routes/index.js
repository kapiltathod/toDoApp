const Todo = require('./server/controllers/todos');
const TodoItem = require('./server/controllers/todoItems');

// routes for todo
app.post('/todos', Todo.createTodo);



// routes for todoItems
app.post('/todoItems', TodoItem.createTodoItems)

