'use strict';
class EstudianteDTO {
    constructor(estudiante) {
        this.id = estudiante.id;
        this.nombreCompleto = estudiante.nombreCompleto;
        this.cursosTerminados = estudiante.modulo;
        this.nivelIngles = estudiante.nivelIngles;
        this.nodo = estudiante.nombreNodo;
    }
}

module.exports = EstudianteDTO;