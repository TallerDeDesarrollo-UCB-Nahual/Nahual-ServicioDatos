const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const Nodo = sequelize.define('Nodo', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    'nombre': DataTypes.STRING
});
module.exports = Nodo;