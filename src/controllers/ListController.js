const Board = require('../models/Board');
const List = require('../models/List');

module.exports = {

    async store(req, res) {

        const { board_id } = req.params;
        const { name } = req.body;

        const boards = await Board.findByPk(board_id);

        if(!boards){
            return res.json({
                error: 'Quadro não encontrado!'
            });
        }

        const list = await List.create({
            name,
            board_id
        });
        
        return res.json(list);

    },

    async index(req, res) {

        const { board_id } = req.params;
        const boards = await Board.findByPk(board_id, {
            include: {
                association: 'lists'
            }
        });

        if(!boards){
            return res.json({
                error: 'Quadro não encontrada!'
            });
        }

        return res.json(boards.lists);

    },
    async update(req, res) {

        const {id} = req.params;
        const list = await List.findByPk(id);
        
        if(!list) {
            return res.json({
                error: "Lista não encontrada! "
            });
        }

        const update = await List.update(req.body, {
            where: {
                id: id
            }
        });

        if(!update) {
            return res.json({
                error: "Lista não atualizada!"
            });
        } else{
            const updated = await List.findByPk(id);
            return res.status(200).json(updated);
        }
    },
    async delete(req, res) {
        
        const {id} = req.params;
        const list = await List.findByPk(id);

        if(!list) {
            return res.json({
                error: "Lista não encontrada!"
            });
        }

        const destroy = await List.destroy({
            where: {
                id: id
            }
        });

        if(!destroy) {
            return res.json({
                error: "Lista não deletada!"
            });
        } else{
            return res.status(200).json("Lista removida!")
        }
    }
};