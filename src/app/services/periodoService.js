const { Periodo, Topico } = require('../models');
const CursoService = require('./cursoService');
const PeriodoService = {
  encontrarTodosLosPeriodos: async (parametros) => {
    let todosLosPeriodos = await Periodo.findAll({
      where: parametros,
      attributes: { exclude: ['TopicoId'] },
      include: [
        {
          model: Topico,
          as: 'topico',
          attributes: { exclude: ['id'] }
        }
      ]
    });
    todosLosPeriodos = todosLosPeriodos.map(x => x.dataValues);
    return { 'response': todosLosPeriodos };
  },

  encontrarPeriodoporId: async (periodoId) => {
    let periodo = await Periodo.findOne({
      where: { id: periodoId },
      attributes: { exclude: ['TopicoId'] },
      include: [
        {
          model: Topico,
          as: 'topico',
          attributes: { include: ['id'] }
        }
      ]
    });
    return { 'response': periodo };
  },

  crearPeriodo: async (request, response) => {
    try {
      const periodo = await Periodo.create(request.body);
      return { message: "El periodo fue creado exitosamente", result: periodo };
    } catch (error) {
      throw error;
    }
  },

  editarPeriodo: async (request, response) => {
    const resultado = await Periodo.update(request.body, { where: { id: request.params.id } });
    let periodo = await Periodo.findByPk(request.params.id);
    return { message: "El periodo fue editado exitosamente", Periodo: periodo };
  },

  eliminarPeriodo: async (idPeriodo) => {
    try {
      const periodoABorrar = await Periodo.findOne({ where: { id: Number(idPeriodo) } })
      cursos = CursoService.encontrarCursosPorPeriodo({PeriodoId: idPeriodo})
      if (periodoABorrar) {
        if (cursos.length > 0) {
          cursos.forEach(curso => {
            CursoService.eliminarCursoEnPeriodo(idPeriodo, curso.idCurso)
          });
        }
        const periodoEliminado = Periodo.destroy({
          where: { id: idPeriodo }
        });
        return { message: `El periodo con id ${idPeriodo} fue eliminado correctamente y todos los cursos dentro de el tambien` };
      }
      return { message: `El periodo con id ${idPeriodo} no fue encontrado` };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PeriodoService;