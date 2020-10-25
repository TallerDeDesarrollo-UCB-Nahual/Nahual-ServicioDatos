const { Estudiante } = require('../models');
const EstudianteDTO = require('../models/DTOs/estudianteDTO');
const Sequelize = require('sequelize');

const EstudianteService = {
    encontrarEstudiantes: async(parameters) => {
        const pagina = parameters.pagina - 1;
        let todosLosEstudiantes = await Estudiante.findAll({
            offset: pagina * 10,
            limit: 10
        });
        todosLosEstudiantes = todosLosEstudiantes.map(x => x.dataValues);
        return { 'response': todosLosEstudiantes };
    },

    encontrarEgresadePorId: async(estudianteId) => {
        let egresade = await Estudiante.findByPk(estudianteId)
        return { 'response': egresade };
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
 
    encontrarEstudiantesEgresades: async(parameters) => {
        const Op = Sequelize.Op;
        const pagina = parameters.pagina-1;
        delete parameters.pagina;
        const criterioDeOrden = parameters.ordenarPor || 'id';
        delete parameters.ordenarPor;
        const sentidoDeOrden = criterioDeOrden ==='añoGraduacion' ? 'DESC':'ASC';
        if('nombreCompleto' in parameters)
            parameters.nombreCompleto = { [Op.startsWith]: parameters.nombreCompleto };
        let todosLosEgresadesPorNombre = await Estudiante.findAll({
            offset: pagina * 10,
            limit: 10,
            where: parameters,
            order: [
                [criterioDeOrden, sentidoDeOrden]
              ]
        });
        return { 'response': todosLosEgresadesPorNombre };
    }

}

module.exports = EstudianteService;