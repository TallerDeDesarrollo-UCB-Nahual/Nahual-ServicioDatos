const { Estudiante } = require('../models');
const EstudianteDTO = require('../models/DTOs/estudianteDTO');
const Sequelize = require('sequelize');

const EstudianteService = {
    encontrarEstudiantes: async(request, response) => {
        let todosLosEstudiantes = await Estudiante.findAll();
        todosLosEstudiantes = todosLosEstudiantes.map(x => x.dataValues);
        return { 'response': todosLosEstudiantes };
    },

    encontrarEgresadePorId: async(estudianteId) => {
        let egresade = await Estudiante.findByPk(estudianteId)
        return { 'response': egresade };
    },

    encontrarEstudiantesEgresades: async(request, response) => {
        let todosLosEstudiantes = await Estudiante.findAll({
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
            await Estudiante.count({ where: { nombreCompleto: estudiante.nombreCompleto } }).then(async count => {
                if (count != 0) {
                    await Estudiante.update(estudiante, {
                        where: {
                            nombreCompleto: estudiante.nombreCompleto,
                            nombreEstado: 'Egresade'
                        }
                    })
                } else {
                    await Estudiante.create(estudiante, {
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
            const resultado = await Estudiante.update(request.body, { where: { id: request.params.id } });
            let estudiante = await Estudiante.findByPk(request.params.id);
            return { message: "El estudiante fue actualizado exitosamente", Estudiante: estudiante };
        } catch (error) {
            throw error;
        }
    },

    crearEstudiante: async(request, response) => {
        try {
            const resultado = await Estudiante.create(request.body);
            return { message: "El estudiante fue creado exitosamente", result: resultado };
        } catch (error) {
            throw error;
        }
    },
    
    eliminarEstudiante: async(request, response) => {
        try {
            const resultado = await Estudiante.destroy({ where: { id: request.params.id } });
            return { message: "El Estudiante  fue eliminado exitosamente", result: resultado };
        } catch (error) {
            throw error;
        }
    },

    encontrarEstudiantesEgresadesDesempleados: async(parameters) => {
        let todosLosEgresadesDesempleados = await Estudiante.findAll({
            where: parameters
        });
        //todosLosEgresadesDesempleados = todosLosEgresadesDesempleados.map(x => new EstudianteModel(x.dataValues));
        return { 'response': todosLosEgresadesDesempleados };
    },

    
    encontrarEstudiantesEgresadesPorNombre: async(parameters) => {
        const Op = Sequelize.Op;
        console.log(parameters)
        let todosLosEgresadesPorNombre = await Estudiante.findAll({
            where: {
                nombreCompleto: {
                  [Op.startsWith]: parameters.nombreCompleto
                }
              }
            //where:{ nombreCompleto: {
            //    [Op.startsWith]: parameters.nombreCompleto
            //  }}
        });
        
        return { 'response': todosLosEgresadesPorNombre };
    }

}

module.exports = EstudianteService;