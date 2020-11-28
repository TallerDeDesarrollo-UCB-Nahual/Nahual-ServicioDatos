'use strict';

class EstudianteDTO {
    
    constructor(estudiante) {
        this.estudianteDTO = {
            'id': estudiante.id,
            'nombre': estudiante.nombre,
            'apellido': estudiante.apellido,
            'Estado': estudiante.estado.nombre,
            'fechaNacimiento': estudiante.fechaNacimiento,
            'correo': estudiante.correo,
            'celular': estudiante.celular,
            'sede': estudiante.sede && estudiante.sede.nombre,
            'nodo': estudiante.nodo && estudiante.nodo.nombre,
            'añoGraduacion': estudiante.añoGraduacion,
            'cuatrimestre': estudiante.cuatrimestre,
            'nivelIngles': estudiante.nivelIngles && estudiante.nivelIngles.nombre,
            'nombrePrimerTrabajo': estudiante.nombrePrimerTrabajo,
            'linkedin': estudiante.linkedin,
            'esEmpleado': estudiante.esEmpleado,
            'modulo': estudiante.modulo,
            'zona': estudiante.zona,
        }
    }

    obtenerDtoDeEstudiante() {
        return this.estudianteDTO;
    }

}

module.exports = EstudianteDTO;