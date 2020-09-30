const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const NivelIngles = sequelize.define('NivelIngles', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    'nombre': DataTypes.STRING
});
module.exports = NivelIngles;