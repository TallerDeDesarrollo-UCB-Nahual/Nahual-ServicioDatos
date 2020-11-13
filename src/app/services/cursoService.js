const { Curso } = require('../models');
const CursoService = {
    encontrarTodosLosCursos: async(request, response) => {
        let todosLosCursos = await Curso.findAll({
            attributes: {exclude: ['CursoId']},
            include: 'curso'
        });
        todosLosCursos = todosLosCursos.map(x => x.dataValues);
        return { 'response': todosLosCursos };
    },

    crearCurso: async(request, response) => {
        try {
            const curso = await Curso.create(request.body);
            return { message: "El curso fue creado exitosamente", result: curso};
        } catch (error) {
            throw error;
        }
    },
}

module.exports = CursoService;