module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    'dni': DataTypes.INTEGER,
    'nombre': DataTypes.STRING,
    'apellido': DataTypes.STRING,
    'nacionalidad': DataTypes.STRING,
    'localidad': DataTypes.STRING,
    'trabajaActualmente': DataTypes.BOOLEAN,
    'lugarDeTrabajo': DataTypes.STRING,
    'trabajaSistemas': DataTypes.BOOLEAN,
    'experienciaSistemas': DataTypes.STRING,
    'estudiosSistemas': DataTypes.STRING,
    'estadoId': DataTypes.INTEGER,
    'fechaNacimiento': DataTypes.DATE,
    'correo': DataTypes.STRING,
    'celular': DataTypes.STRING,
    'sedeId': DataTypes.INTEGER,
    'nodoId': DataTypes.INTEGER,
    'añoGraduacion': DataTypes.INTEGER,
    'cuatrimestre': DataTypes.INTEGER,
    'nivelInglesId': DataTypes.INTEGER,
    'nombrePrimerTrabajo': DataTypes.STRING,
    'linkedin': DataTypes.STRING,
    'esEmpleado': DataTypes.BOOLEAN,
    'modulo': DataTypes.STRING,
    'zona': DataTypes.STRING,
    'detalle': DataTypes.STRING,
  });
  Estudiante.associate = function(models){
    Estudiante.belongsTo(models.Sede, {foreignKey: 'sedeId', as: 'sede'}),
    Estudiante.belongsTo(models.Nodo, {foreignKey: 'nodoId', as: 'nodo'}),
    Estudiante.belongsTo(models.Estado, {foreignKey: 'estadoId', as: 'estado'}),
    Estudiante.belongsTo(models.NivelIngles, {foreignKey: 'nivelInglesId', as: 'nivelIngles'})
    
  };
  return Estudiante;
}
