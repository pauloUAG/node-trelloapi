const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database/index'); //Necessário para que os Models verifiquem a conexão com o banco

const app = express();

app.use(cors()); //Limitar acesso
app.use(express.json());//Trarar requisições com JSON
app.use(routes);

app.listen(process.env.PORT || 3001);