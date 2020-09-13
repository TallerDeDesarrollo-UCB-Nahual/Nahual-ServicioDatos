const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const Node = sequelize.define('Node', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	name: DataTypes.STRING
});
module.exports = Node;