module.exports = (sequelize, DataTypes) => {
  const Nodo = sequelize.define('Nodo', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    'nombre': DataTypes.STRING
  });
  Nodo.associate = function(models){
    Nodo.hasMany(models.Sede, {as: 'sedes'})
  };
  return Nodo;
}
