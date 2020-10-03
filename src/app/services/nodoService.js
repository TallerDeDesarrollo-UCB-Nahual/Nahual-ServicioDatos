const NodoModel = require('../models/nodo');
const NodoService = {
    encontrarTodosLosNodos: async(request, response) => {
        let todosLosNodos = await NodoModel.findAll();
        todosLosNodos = todosLosNodos.map(x => x.dataValues);
        return { 'response': todosLosNodos };
    }
}

module.exports = NodoService;