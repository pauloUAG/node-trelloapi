const { Model, DataTypes } = require('sequelize');

class List extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Board, { foreignKey: 'board_id', as: 'board' });
        this.hasMany(models.Card, { foreignKey: 'list_id', as: 'cards'}); 
    }
}

module.exports = List;