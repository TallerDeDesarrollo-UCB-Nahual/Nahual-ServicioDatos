module.exports = (sequelize, DataTypes) => {
	const Node = sequelize.define('Node', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'name': DataTypes.STRING
	});
	return Node;
}