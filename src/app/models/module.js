module.exports = (sequelize, DataTypes) => {
	const Module = sequelize.define('Module', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'name': DataTypes.STRING
	});
	return Module
}