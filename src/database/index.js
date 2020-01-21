//CREDENCIAIS DE ACESSO DA BASE DE DADOS!
const Sequelize = require('sequelize'); //Importando sequelize como classe 
const configDb = require('../config/database');
const User = require('../models/User'); //Importando model User
const Board = require('../models/Board');
const List = require('../models/List'); 
const Card = require('../models/Card'); 

const connection = new Sequelize(configDb);

User.init(connection); //Model pronto para ser utilizado
Board.init(connection); //Model pronto para ser utilizado
List.init(connection); //Model pronto para ser utilizado
Card.init(connection); //Model pronto para ser utilizado

Board.associate(connection.models); //Necessário para que a relação com User retorne buscas especificas. 
User.associate(connection.models); //Necessário para que a relação com User retorne buscas especificas. Ex: Boards que pertencem a um usuário -> association: 'boards'
List.associate(connection.models); 
Card.associate(connection.models);

if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize')
      , sequelize = null
  
    if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
      // the application is executed on Heroku ... use the postgres database
      sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        port:     match[4],
        host:     match[3],
        logging:  true //false
      })
    }

    global.db = {
      Sequelize: Sequelize,
      sequelize: sequelize,
      User:      sequelize.import(__dirname + './models/User'),
      Board:      sequelize.import(__dirname + './models/Board'),
      Card:      sequelize.import(__dirname + './models/Card'),
      List:      sequelize.import(__dirname + './models/List'), 
      // add your other models here
    }
  
    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
  }


module.exports = connection, global.db;