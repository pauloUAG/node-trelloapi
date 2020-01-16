//EXPORTANDO UM OBJETO DE CONFIGURAÇÃO DA BASE DE DADOS
module.exports = {
     dialect: 'postgres',
     host: 'localhost',
     username: 'paulo',
     password: 'trelloapi',
     database: 'trelloapi',
     define: {
          timestamps: true,
          underscored: true
     },
};