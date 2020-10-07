module.exports = (sequelize, DataTypes) => {
  const NivelIngles = sequelize.define('NivelIngles', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    'nombre': DataTypes.STRING
  });
  return NivelIngles;
}
