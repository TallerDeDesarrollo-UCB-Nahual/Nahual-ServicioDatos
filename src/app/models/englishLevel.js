const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const EnglishLevel = sequelize.define('EnglishLevel', {
	'id': {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	'name': DataTypes.STRING
});
module.exports = EnglishLevel;