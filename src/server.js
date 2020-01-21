const express = require('express');
const routes = require('./routes');
const cors = require('cors');
var db = require('./models');

require('./database/index'); //Necessário para que os Models verifiquem a conexão com o banco

const app = express();

app.use(cors()); //Limitar acesso
app.use(express.json());//Trarar requisições com JSON
app.use(routes);

app.listen(process.env.PORT || 3001);

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});