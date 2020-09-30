const EstudianteModel = require('../models/estudiante');
const EstudianteDTO = require('../models/DTOs/estudianteDTO');
const EstudianteService = {
    findStudents: async(request, response) => {
        let todosLosEstudiantes = await EstudianteModel.findAll();
        todosLosEstudiantes = todosLosEstudiantes.map(x => x.dataValues);
        return { 'response': todosLosEstudiantes };
    },

    findGraduateById: async(estudianteId) => {
        let egresade = await EstudianteModel.findByPk(estudianteId)
        return { 'response': egresade };
    },
    findGraduateStudents: async(request, response) => {
        let todosLosEstudiantes = await EstudianteModel.findAll({
            where: {
                nombreEstado: 'Egresade'
            }
        });
        todosLosEstudiantes = todosLosEstudiantes.map(x => x.dataValues);
        return { 'response': todosLosEstudiantes };
    },
    registerGradutateStudents: async(request, response) => {
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

    updateStudent: async(request, response) => {
        try {
            const result = await EstudianteModel.update(request.body, { where: { id: request.params.id } });
            let Student = await EstudianteModel.findByPk(request.params.id);
            return { message: "El estudiante fue actualizado exitosamente", Student };
        } catch (error) {
            throw error;
        }
    },
    createStudent: async(request, response) => {
        try {
            const result = await EstudianteModel.create(request.body);
            return { message: "El estudiante fue creado exitosamente", result };
        } catch (error) {
            throw error;
        }
    },
    deleteStudent: async(request, response) => {
        try {
            const result = await EstudianteModel.destroy({ where: { id: request.params.id } });
            return { message: "El Estudiante  fue eliminado exitosamente", result };
        } catch (error) {
            throw error;
        }
    },

    findUnemployeGraduateStudents: async(parameters) => {
        let todosLosEgresadesDesempleados = await EstudianteModel.findAll({
            where: parameters
        });
        todosLosEgresadesDesempleados = todosLosEgresadesDesempleados.map(x => new EstudianteDTO(x.dataValues));
        return { 'response': todosLosEgresadesDesempleados };
    }
}

module.exports = EstudianteService;