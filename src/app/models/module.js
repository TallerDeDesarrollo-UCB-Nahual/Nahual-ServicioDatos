const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const Module = sequelize.define('Module', {
	'id': {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	'name': DataTypes.STRING
});
module.exports = Module;