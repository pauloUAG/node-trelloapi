const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        //Exemplo de Query(Requisição) em banco mais complexa. Não utilizado nessa API
        //Encontra todos os usuários que tem email que termina com @rocketseat.com.br
        //Desses usuários, buscar todos que moram na rua "Rua Guilherme Gembala" 
        //Desses usuários, buscar as tecnologias que começam com "React"

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                name: {
                    [Op.iLike]: '%@rocketseat.com.br'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Guilherme Gembala'}},
                { association: 'techs', 
                where: {
                    name: {
                        [Op.iLike]: 'React%'
                    }
                }}
            ],
        })
    }
};