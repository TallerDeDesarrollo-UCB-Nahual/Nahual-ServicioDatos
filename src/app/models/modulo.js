const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const Modulo = sequelize.define('Modulo', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    'nombre': DataTypes.STRING
});
module.exports = Modulo;