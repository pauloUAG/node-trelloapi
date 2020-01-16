const Board = require('../models/Board');
const User = require('../models/User');

module.exports = {
    async store(req, res) {

        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);
        if(!user){
            return res.json({
                error: "Usuário não foi encontrado!"
            });
        }

        const board = await Board.create({
            name,
            user_id
        });

        return res.json(board);
    },
    async index(req, res) {

        const { user_id } = req.params;
        const users = await User.findByPk(user_id, {
            include: {
                association: 'boards'
            }
        });

        if(!users) {
            return res.json({
                error: "Usuário não encontrado!"
            });
        }

        return res.json(users.boards);
    },
    async update(req, res) {

        const {id} = req.params;
        const board = await Board.findByPk(id);
        
        if(!board) {
            return res.json({
                error: "Quadro não encontrado! "
            });
        }

        const update = await Board.update(req.body, {
            where: {
                id: id
            }
        });

        if(!update) {
            return res.json({
                error: "Quadro não atualizado!"
            });
        } else{
            const updated = await Board.findByPk(id);
            return res.status(200).json(updated);
        }
    },
    async delete(req, res) {
        
        const {id} = req.params;
        const board = await Board.findByPk(id);

        if(!board) {
            return res.json({
                error: "Quadro não encontrado!"
            });
        }

        const destroy = await Board.destroy({
            where: {
                id: id
            }
        });

        if(!destroy) {
            return res.json({
                error: "Quandro não deletado!"
            });
        } else{
            return res.status(200).json("Quadro removido!")
        }
    }
};