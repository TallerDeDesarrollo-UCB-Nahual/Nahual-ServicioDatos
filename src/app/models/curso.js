module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'NodoId': DataTypes.INTEGER,
      'SedeId': DataTypes.INTEGER,
      'horarioInicio': DataTypes.TIME,
      'horarioFin': DataTypes.TIME,
      'profesores': DataTypes.STRING,
      'notas': DataTypes.STRING,
      'PeriodoId': DataTypes.INTEGER,
    }, {});
    Curso.associate = function(models){
      Curso.belongsTo(models.Periodo, {foreignKey: 'PeriodoId', as: 'periodo'}),
      Curso.belongsTo(models.Nodo, { foreignKey: 'NodoId', as: 'nodo' }),
      Curso.belongsTo(models.Sede, { foreignKey: 'SedeId', as: 'sede' }),
    };
    return Curso;
}