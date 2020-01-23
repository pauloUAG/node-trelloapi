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

module.exports = connection;