const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { name, email, password } = req.body;
        const user = await User.create({name, email, password});
        return res.json(user);
    },

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async update(req, res) {

        const {id} = req.params;

        const user = await User.findByPk(id);

        if(!user) {
            return res.json({
                error: "Usuário não encontrado!"
            });
        }

        const update = await User.update(req.body, {
            where: {
                id: id
            }
        });

        if(update) {
            const updated = await User.findByPk(id);
            return res.status(200).json(updated);
        }
    },
    async delete(req, res) {
        
        const {id} = req.params;
        const user = User.findByPk(id);

        if(!user) {
            return res.json({
                Error: "Usuário não encontrado!"
            });
        }

        const destroy = await User.destroy({
            where: {
                id: id
            }
        });

        if(destroy) {
            return res.json(200).json("User destroyed");
        }
    }
};