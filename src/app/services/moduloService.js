const { Modulo } = require('../models');
const ModuloService = {
    encontrarTodosLosModulos: async(request, response) => {
        let todosLosModulos = await Modulo.findAll();
        todosLosModulos = todosLosModulos.map(x => x.dataValues);
        return { 'response': todosLosModulos };
    }
}

module.exports = ModuloService;