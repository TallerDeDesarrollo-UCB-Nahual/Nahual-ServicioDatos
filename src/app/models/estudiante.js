const sequelize = require('../../config/sequelizeconfiguration').sequelize;
const DataTypes = require('../../config/sequelizeconfiguration').datatype;
const Estudiante = sequelize.define('Estudiante', {
    'id': {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    'nombreCompleto': DataTypes.STRING,
    'nombreEstado': DataTypes.STRING,
    'fechaNacimiento': DataTypes.DATE,
    'correo': DataTypes.STRING,
    'celular': DataTypes.INTEGER,
    'nombreNodo': DataTypes.STRING,
    'añoGraduacion': DataTypes.INTEGER,
    'cuatrimestre': DataTypes.INTEGER,
    'nivelIngles': DataTypes.STRING,
    'nombrePrimerTrabajo': DataTypes.STRING,
    'linkedin': DataTypes.STRING,
    'esEmpleado': DataTypes.BOOLEAN,
    'modulo': DataTypes.STRING
});
module.exports = Estudiante;