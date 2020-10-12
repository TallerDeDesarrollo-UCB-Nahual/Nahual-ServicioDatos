'use strict';
class EstudianteDTO {
    
    constructor(estudiante) {
        this.estudianteDTO = {
            'id': estudiante.id,
            'nombreCompleto': estudiante.nombreCompleto,
            'nombreEstado': estudiante.nombreEstado,
            'fechaNacimiento': estudiante.fechaNacimiento,
            'correo': estudiante.correo,
            'celular': estudiante.celular,
            'sede': estudiante.sede.nombre,
            'nodo': estudiante.nodo.nombre,
            'añoGraduacion': estudiante.añoGraduacion,
            'cuatrimestre': estudiante.cuatrimestre,
            'nivelIngles': estudiante.nivelIngles.nombre,
            'nombrePrimerTrabajo': estudiante.nombrePrimerTrabajo,
            'linkedin': estudiante.linkedin,
            'esEmpleado': estudiante.esEmpleado,
            'modulo': estudiante.modulo
        }
    }

    obtenerEstudianteDTO() {
        return this.estudianteDTO;
    }
}

module.exports = EstudianteDTO;