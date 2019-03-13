const authentication = require('./server/controllers/authentication');

app.post('/signup', authentication.signup);
app.post('/login', authentication.login);