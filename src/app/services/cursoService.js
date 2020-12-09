const { Curso, Nodo, Sede, Inscripto, Estudiante, NivelIngles } = require('../models');
const CursoService = {
    encontrarTodosLosCursos: async(request, response) => {
        let todosLosCursos = await Curso.findAll();
        todosLosCursos = todosLosCursos.map(x => x.dataValues);
        return { 'response': todosLosCursos };
    },
    
    encontrarCursosPorPeriodo: async(parametros) => {
        console.log(parametros.PeriodoId)
        let todosLosCursos = await Curso.findAll({
            where: parametros,
            attributes: {exclude: ['PeriodoId','NodoId','SedeId']},
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
    
    encontrarInscriptesDeUnCurso: async (idCurso) => {
        try {
          const curso = await Inscripto.findAll({
            attributes: { exclude: ["cursoId", "estudianteId"] },
            where: { cursoId: Number(idCurso) },
            include: [
              {
                model: Estudiante,
                as: "estudiante",
                where: { estadoId: 2 },
                attributes: { exclude: ["nodoId", "sedeId", "nivelInglesId"] },
                include: [
                  {
                    model: Nodo,
                    as: "nodo"
                  },
                  {
                    model: Sede,
                    as: "sede"
                  },
                  {
                    model: NivelIngles,
                    as: "nivelIngles"
                  }
                ]
              }
            ]
          });
          return { response: curso };
        } catch (error) {
          throw error;
        }
    },

    encontrarCursoPorId: async(cursoId) => {
        let curso = await Curso.findByPk(cursoId,{
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
        return { 'respuesta': curso };
    },

    crearCurso: async(request, response) => {
        try {
            const curso = await Curso.create(request.body);
            return { message: "El curso fue creado exitosamente", result: curso};
        } catch (error) {
            throw error;
        }
    },

    editarCurso: async(request, response) => {
        const resultado = await Curso.update(request.body, { where: { id: request.params.id } });
        let curso = await Curso.findByPk(request.params.id);
        return { message: "El curso fue editado exitosamente", Curso: curso };
    },

    eliminarCursoEnPeriodo: async(idPeriodo, idCurso) => {
        console.log(idPeriodo,idCurso);

        try{
            const cursoABorrar = await Curso.findOne({where: {id: Number(idCurso), PeriodoId: Number(idPeriodo)}})
    
            if(cursoABorrar){
              const cursoEliminado = Curso.destroy({
                where:{id:idCurso, PeriodoId: idPeriodo}
              });
              return {message: `El curso con id ${idCurso} y periodo con id ${idPeriodo} fue eliminado correctamente`};
            }
            return {message: `El curso con id ${idCurso} y periodo con id ${idPeriodo} no fue encontrado`};;
        } catch (error) {
            throw error;
        } 
    }
}

module.exports = CursoService;