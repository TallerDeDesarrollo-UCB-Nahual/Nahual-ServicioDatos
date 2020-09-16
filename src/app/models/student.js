const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const Student = sequelize.define('Student', {
	'id': {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	'fullName': DataTypes.STRING,
	'statusName': DataTypes.STRING,
	'birthDate': DataTypes.DATE,
	'mail': DataTypes.STRING,
	'cellphone': DataTypes.INTEGER,
	'nodeName': DataTypes.STRING,
	'graduationYear': DataTypes.INTEGER,
	'quarter': DataTypes.INTEGER,
	'englishLevel': DataTypes.STRING,
	'firstJobName': DataTypes.STRING,
	'linkedin': DataTypes.STRING,
	'isEmployed': DataTypes.BOOLEAN,
    'module': DataTypes.STRING
});
module.exports = Student;
