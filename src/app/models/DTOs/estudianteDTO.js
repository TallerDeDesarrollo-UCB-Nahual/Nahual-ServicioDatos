'use strict';
class EstudianteDTO {
    
    constructor(estudiante) {
        this.estudianteDTO = {
            'id': estudiante.id,
            'nombreCompleto': estudiante.nombreCompleto,
            'Estado': estudiante.estado.nombre,
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

    static obtenerEstudiantesDTO(listaEstudiantes) {
        return listaEstudiantes.map((estudiante) => {
            const estudianteDTO = new EstudianteDTO(estudiante).obtenerEstudianteDTO();
            return estudianteDTO;
        });
    }
}

module.exports = EstudianteDTO;