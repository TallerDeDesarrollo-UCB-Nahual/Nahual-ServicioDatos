module.exports = (sequelize, DataTypes) => {
    const Periodo = sequelize.define('Periodo', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      'anio': DataTypes.INTEGER,
      'periodo': DataTypes.STRING,
      'topico': DataTypes.STRING,
      'estado': DataTypes.BOOLEAN
    });
    Periodo.associate = function(models){
      Periodo.hasMany(models.Curso, {as: 'cursos'})
    };
    return Periodo;
  }