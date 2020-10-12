module.exports = (sequelize, DataTypes) => {
  const Nodo = sequelize.define('Nodo', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    'nombre': DataTypes.STRING,
    'SedeId': DataTypes.INTEGER
  });
  Nodo.associate = function(models){
    Nodo.belongsTo(models.Sede, {foreignKey: 'SedeId', as: 'sede'})
};
  return Nodo;
}
