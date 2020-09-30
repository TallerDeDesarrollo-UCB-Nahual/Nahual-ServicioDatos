const ModuloModel = require('../models/modulo');
const ModuloService = {
    findAll: async(request, response) => {
        let todosLosModulos = await ModuloModel.findAll();
        todosLosModulos = todosLosModulos.map(x => x.dataValues);
        return { 'response': todosLosModulos };
    }
}

module.exports = ModuloService;