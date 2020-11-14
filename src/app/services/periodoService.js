const { Periodo, Topico } = require('../models');
const PeriodoService = {
    encontrarTodosLosPeriodos: async(parametros) => {
        let todosLosPeriodos = await Periodo.findAll({
            where: parametros,
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

    eliminarPeriodo: async(idPeriodo) => {
        try{
            const periodoABorrar = await Periodo.findOne({where: {PeriodoId: Number(idPeriodo)}})
           
            if(periodoABorrar){
              const periodoEliminado = Periodo.destroy({
                where:{PeriodoId: idPeriodo}
              });
              return {message: `El periodo con id ${idPeriodo} fue eliminado correctamente`};
            }
            return {message: `El periodo con id ${idPeriodo} no fue encontrado`};;
        } catch (error) {
            throw error;
        } 
    }
}

module.exports = PeriodoService;