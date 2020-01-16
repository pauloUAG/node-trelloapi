const { Model, DataTypes } = require('sequelize');

class Card extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.List, { foreignKey: 'list_id', as: 'list' });
    }
}

module.exports = Card;