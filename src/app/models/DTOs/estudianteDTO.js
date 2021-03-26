'use strict';

class EstudianteDTO {

    constructor(estudiante) {
        this.estudianteDTO = {
            'id': estudiante.id,
            'dni': estudiante.dni,
            'nombre': estudiante.nombre,
            'apellido': estudiante.apellido,
            'nacionalidad': estudiante.nacionalidad,
            'trabajaActualmente': estudiante.trabajaActualmente,
            'lugarDeTrabajo': estudiante.lugarDeTrabajo,
            'trabajaSistemas': estudiante.trabajaSistemas,
            'experienciaSistemas': estudiante.experienciaSistemas,
            'estudiosSistemas': estudiante.estudiosSistemas,
            'Estado': estudiante.estado.nombre,
            'fechaNacimiento': estudiante.fechaNacimiento,
            'correo': estudiante.correo,
            'correoOpcional': estudiante.correoOpcional,
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
            'detalle': estudiante.detalle,
            'fechaActualTrabajo': estudiante.fechaActualTrabajo,
            'lugarActualTrabajo': estudiante.lugarActualTrabajo,
        }
    }

    obtenerDtoDeEstudiante() {
        return this.estudianteDTO;
    }

}

module.exports = EstudianteDTO;