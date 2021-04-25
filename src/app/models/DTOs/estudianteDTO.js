'use strict';

class EstudianteDTO {

    constructor(estudiante) {
        this.estudianteDTO = {
            'id': estudiante.id,
            'dni': estudiante.dni,
            'nombre': estudiante.nombre,
            'apellido': estudiante.apellido,
            'nacionalidad': estudiante.nacionalidad,
            'fechaNacimiento': estudiante.fechaNacimiento,
            'correo': estudiante.correo,
            'correoOpcional': estudiante.correoOpcional,
            'celular': estudiante.celular,
            'linkedin': estudiante.linkedin,
            'zona': estudiante.zona,
            'detalle': estudiante.detalle,
            'añoGraduacion': estudiante.añoGraduacion,
            'nombrePrimerTrabajo': estudiante.nombrePrimerTrabajo,
            'trabajaActualmente': estudiante.trabajaActualmente,
            'trabajaSistemas': estudiante.trabajaSistemas,
            'experienciaSistemas': estudiante.experienciaSistemas,
            'estudiosSistemas': estudiante.estudiosSistemas,
            'fechaActualTrabajo': estudiante.fechaActualTrabajo,
            'lugarActualTrabajo': estudiante.lugarActualTrabajo,
            'fechaPrimerEmpleo': estudiante.fechaPrimerEmpleo,
            'nivelIngles': estudiante.nivelIngles && estudiante.nivelIngles.nombre,
            'topico': estudiante.topico,
            'Estado': estudiante.estado.nombre,
            'sede': estudiante.sede && estudiante.sede.nombre,
            'nodo': estudiante.nodo && estudiante.nodo.nombre, 
        }
    }

    obtenerDtoDeEstudiante() {
        return this.estudianteDTO;
    }

}

module.exports = EstudianteDTO;