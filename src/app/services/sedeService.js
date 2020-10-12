const { Sede, Nodo } = require('../models');
const { Estudiante } = require('../models');
const SedeService = {
    encontrarTodasLasSedes: async(request, response) => {
        let sedes = await Sede.findAll({
            include: {
                model: Nodo,
                as: 'nodos',
                attributes: {exclude: ['SedeId']}
            }
        });
        sedes = sedes.map(x => x.dataValues);
        return { 'response': sedes };
    },

    encontrarSedePorIdDeEstudiante: async(id) => {
        let estudiante = await Estudiante.findByPk(id,{
            include:'sede'
        })
        let sede = await Sede.findByPk(estudiante.sede.id, {
            include: 'nodo'
        })
        return { 'response': sede };
    }

}
module.exports = SedeService;