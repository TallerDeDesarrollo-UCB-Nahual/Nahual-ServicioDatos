'use strict';

const { Estudiante } = require("../estudiante");
const { Sede } = require("../sede");

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

    obtenerDtoDeEstudiante() {
        return this.estudianteDTO;
    }

    static obtenerDtoDeListaEstudiantes(listaEstudiantes) {
        return listaEstudiantes.map((estudiante) => {
            const estudianteDTO = new EstudianteDTO(estudiante).obtenerDtoDeEstudiante();
            return estudianteDTO;
        });
    }

    static obtenerEstudianteDeDTO(estudianteDTO) {
        const nivelInglesId = Estudiante.findOne({
            where: {
                nombre: estudianteDTO.nivelIngles,
            }
        }).id;
        const sedeEncontrado = Sede.findOne({
            where: {
                nombre: estudianteDTO.sede,
            }
        });
        const sedeId = sedeEncontrado.id;
        const nodoId = sedeEncontrado.NodoId;
        const { nivelIngles, sede, nodo, ...estudianteInfo} = estudianteDTO;
        return { ...estudianteInfo, nivelInglesId, sedeId, nodoId };
    }
}

module.exports = EstudianteDTO;