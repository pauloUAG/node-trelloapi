const { Model, DataTypes } = require('sequelize');

class Board extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.hasMany(models.List, { foreignKey: 'board_id', as: 'lists' });
    }
}

module.exports = Board;