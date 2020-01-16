const Card = require('../models/Card');
const List = require('../models/List');

module.exports = {

    async store(req, res) {

        const { list_id } = req.params;
        const { name } = req.body;

        const lists = await List.findByPk(list_id);

        if(!lists){
            return res.json({
                error: 'Lista não encontrada!'
            });
        }

        const card = await Card.create({
            name,
            list_id
        });

        return res.json(card);
    },

    async index(req, res) {

        const { list_id } = req.params;
        const lists = await List.findByPk(list_id, {
            include: {
                association: 'cards'
            }
        });

        if(!lists){
            return res.json({
                error: 'Lista não encontrada!'
            });
        }
        
        return res.json(lists);
    },
    async update(req, res) {

        const {id} = req.params;
        const card = await Card.findByPk(id);
        
        if(!card) {
            return res.json({
                error: "Cartão não encontrado! "
            });
        }

        const update = await Card.update(req.body, {
            where: {
                id: id
            }
        });

        if(!update) {
            return res.json({
                error: "Cartão não atualizado!"
            });
        } else {
            const updated = await Card.findByPk(id);
            return res.status(200).json(updated);
        }
    },
    async delete(req, res) {
        
        const {id} = req.params;
        const card = await Card.findByPk(id);

        if(!card) {
            return res.json({
                error: "Cartão não encontrado!"
            });
        }

        const destroy = await Card.destroy({
            where: {
                id: id
            }
        });

        if(!destroy) {
            return res.json({
                error: "Cartão não deletado!"
            });
        } else{
            return res.status(200).json("Cartão removido!")
        }
    }
};