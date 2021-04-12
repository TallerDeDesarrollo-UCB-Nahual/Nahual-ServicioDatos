module.exports = (sequelize, DataTypes) => {
    const Periodo = sequelize.define('Periodo', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'anio': DataTypes.INTEGER,
      'periodo': DataTypes.STRING,
      'TopicoId': DataTypes.INTEGER,
      'estado': DataTypes.BOOLEAN,
      'mensajeDeCierre': DataTypes.STRING
    });
    Periodo.associate = function(models){
      Periodo.belongsTo(models.Topico, {foreignKey: 'TopicoId', as: 'topico'});
    };
    return Periodo;
  }
