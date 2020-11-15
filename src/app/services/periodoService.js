const { Periodo, Topico } = require('../models');
const PeriodoService = {
    encontrarTodosLosPeriodos: async(parametros) => {
        let todosLosPeriodos = await Periodo.findAll({
            where: parametros,
            attributes: {exclude: ['TopicoId']},
            include:[
                {
                    model: Topico,
                    as: 'topico',
                    attributes: {exclude: ['id']}
                }
            ]
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