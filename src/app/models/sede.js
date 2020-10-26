module.exports = (sequelize, DataTypes) => {
    const Sede = sequelize.define('Sede', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'nombre': DataTypes.STRING
    }, {});
    Sede.associate = function(models){
        Sede.hasMany(models.Nodo, {as: 'nodos'})
    };
    return Sede;
}
  