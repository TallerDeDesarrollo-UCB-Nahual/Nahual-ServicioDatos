const { Periodo } = require('../models');
const PeriodoService = {
    encontrarTodosLosPeriodos: async(request, response) => {
        let todosLosPeriodos = await Periodo.findAll({
            attributes: {exclude: ['PeriodoId']},
            include: 'periodo'
        });
        todosLosPeriodos = todosLosPeriodos.map(x => x.dataValues);
        return { 'response': todosLosPeriodos };
    },

    crearPeriodo: async(request, response) => {
        try {
            const periodo = await Periodo.create(request.body);
            return { message: "El periodo fue creado exitosamente", result: periodo };
        } catch (error) {
            throw error;
        }
    },
}

module.exports = PeriodoService;