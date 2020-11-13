const { Curso, Nodo, Sede } = require('../models');
const CursoService = {
    encontrarTodosLosCursos: async(request, response) => {
        let todosLosCursos = await Curso.findAll();
        todosLosCursos = todosLosCursos.map(x => x.dataValues);
        return { 'response': todosLosCursos };
    },

    encontrarCursosPorPeriodo: async(parametros) => {
        let todosLosCursos = await Curso.findAll({
            where: parametros,
            attributes: {exclude: ['PeriodoId','NodoId','SedeId','profesores','notas']},
            include:  [
                {
                    model: Nodo,
                    as: 'nodo',
                    attributes: {exclude: ['id']},
                },
                {
                    model: Sede,
                    as: 'sede',
                    attributes: {exclude: ['id','NodoId']}
                }
            ]
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