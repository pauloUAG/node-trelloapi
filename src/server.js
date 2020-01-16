const express = require('express');
const routes = require('./routes');

require('./database/index'); //Necessário para que os Models verifiquem a conexão com o banco

const app = express();

app.use(express.json());//Trarar requisições com JSON
app.use(routes);

app.listen(3001);