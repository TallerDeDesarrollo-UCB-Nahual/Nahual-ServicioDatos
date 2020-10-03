const EstudianteModel = require('../models/estudiante');
const EstudianteDTO = require('../models/DTOs/estudianteDTO');
const EstudianteService = {
    encontrarEstudiantes: async(request, response) => {
        let todosLosEstudiantes = await EstudianteModel.findAll();
        todosLosEstudiantes = todosLosEstudiantes.map(x => x.dataValues);
        return { 'response': todosLosEstudiantes };
    },

    encontrarEgresadePorId: async(estudianteId) => {
        let egresade = await EstudianteModel.findByPk(estudianteId)
        return { 'response': egresade };
    },
    encontrarEstudiantesEgresades: async(request, response) => {
        let todosLosEstudiantes = await EstudianteModel.findAll({
            where: {
                nombreEstado: 'Egresade'
            }
        });
        todosLosEstudiantes = todosLosEstudiantes.map(x => x.dataValues);
        return { 'response': todosLosEstudiantes };
    },
    registrarEstudiantesEgresades: async(request, response) => {
        var estudiantes = request.body

        estudiantes.forEach(async estudiante => {
            await EstudianteModel.count({ where: { nombreCompleto: estudiante.nombreCompleto } }).then(async count => {
                if (count != 0) {
                    await EstudianteModel.update(estudiante, {
                        where: {
                            nombreCompleto: estudiante.nombreCompleto,
                            nombreEstado: 'Egresade'
                        }
                    })
                } else {
                    await EstudianteModel.create(estudiante, {
                        where: {
                            nombreEstado: 'Egresade'
                        }
                    })
                }
            })
        })
        return 200
    },

    actualizarEstudiante: async(request, response) => {
        try {
            const resultado = await EstudianteModel.update(request.body, { where: { id: request.params.id } });
            let estudiante = await EstudianteModel.findByPk(request.params.id);
            return { message: "El estudiante fue actualizado exitosamente", Estudiante: estudiante };
        } catch (error) {
            throw error;
        }
    },
    crearEstudiante: async(request, response) => {
        try {
            const resultado = await EstudianteModel.create(request.body);
            return { message: "El estudiante fue creado exitosamente", result: resultado };
        } catch (error) {
            throw error;
        }
    },
    eliminarEstudiante: async(request, response) => {
        try {
            const resultado = await EstudianteModel.destroy({ where: { id: request.params.id } });
            return { message: "El Estudiante  fue eliminado exitosamente", result: resultado };
        } catch (error) {
            throw error;
        }
    },

    encontrarEstudiantesEgresadesDesempleados: async(parameters) => {
        let todosLosEgresadesDesempleados = await EstudianteModel.findAll({
            where: parameters
        });
        todosLosEgresadesDesempleados = todosLosEgresadesDesempleados.map(x => new EstudianteDTO(x.dataValues));
        return { 'response': todosLosEgresadesDesempleados };
    }
}

module.exports = EstudianteService;