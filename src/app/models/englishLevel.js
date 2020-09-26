module.exports = (sequelize, DataTypes) => {
	const EnglishLevel = sequelize.define('EnglishLevel', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'name': DataTypes.STRING
	});
	return EnglishLevel;
}