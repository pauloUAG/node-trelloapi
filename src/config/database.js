//EXPORTANDO UM OBJETO DE CONFIGURAÇÃO DA BASE DE DADOS
module.exports = {
     dialect: 'postgres',
     "dialectOptions": {
          "ssl": true
     },
     host: 'ec2-107-21-214-101.compute-1.amazonaws.com',
     username: 'wjtjiqpypyvbwv',
     password: 'f5ef93cb065d6f0a894229f49f30d2073804845b9ddbba73525ca61f6d05a4db',
     database: 'd752nk8p0vc9bn',
     define: {
          timestamps: true,
          underscored: true
     },
};