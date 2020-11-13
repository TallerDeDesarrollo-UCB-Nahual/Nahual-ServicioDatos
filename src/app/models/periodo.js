module.exports = (sequelize, DataTypes) => {
    const Periodo = sequelize.define('Periodo', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'anio': DataTypes.INTEGER,
      'periodo': DataTypes.STRING,
      'topicoId': DataTypes.INTEGER,
      'estado': DataTypes.BOOLEAN
    });
    Periodo.associate = function(models){
      Periodo.hasMany(models.Curso, {as: 'cursos'});
      Periodo.belongsTo(models.Topico, {foreignKey: 'topicoId', as: 'topico'});
    };
    return Periodo;
  }
