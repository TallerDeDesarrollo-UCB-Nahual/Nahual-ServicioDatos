module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      'NodoId': DataTypes.INTEGER,
      'SedeId': DataTypes.INTEGER,
      'horario': DataTypes.STRING,
      'profesores': DataTypes.STRING,
      'notas': DataTypes.STRING,
      'anio': DataTypes.INTEGER,
      'periodo': DataTypes.STRING,
      'TopicoId': DataTypes.INTEGER,
      'estado': DataTypes.BOOLEAN,
      'PeriodoId': DataTypes.INTEGER,
    }, {});
    Curso.associate = function(models){
      Curso.belongsTo(models.Periodo, {foreignKey: 'PeriodoId', as: 'periodo'});
      Curso.belongsTo(models.Nodo, { foreignKey: 'NodoId', as: 'nodo' });
      Curso.belongsTo(models.Sede, { foreignKey: 'SedeId', as: 'sede' });
      Curso.belongsTo(models.Topico, {foreignKey: 'TopicoId', as: 'topico'});
    };
    return Curso;
}
