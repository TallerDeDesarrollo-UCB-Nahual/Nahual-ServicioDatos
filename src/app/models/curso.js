module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'nodo': DataTypes.STRING,
      'horarioInicio': DataTypes.TIME,
      'horarioFin': DataTypes.TIME,
      'profesores': DataTypes.STRING,
      'notas': DataTypes.STRING,
      'PeriodoId': DataTypes.INTEGER,
    }, {});
    Curso.associate = function(models){
      Curso.belongsTo(models.Periodo, {foreignKey: 'PeriodoId', as: 'periodo'})
    };
    return Curso;
}