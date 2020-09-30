const NodoModel = require('../models/nodo');
const NodoService = {
    findAll: async(request, response) => {
        let todosLosNodos = await NodoModel.findAll();
        todosLosNodos = todosLosNodos.map(x => x.dataValues);
        return { 'response': todosLosNodos };
    }
}

module.exports = NodoService;