const { Nodo } = require('../models');
const NodoService = {
    encontrarTodosLosNodos: async(request, response) => {
        let todosLosNodos = await Nodo.findAll();
        todosLosNodos = todosLosNodos.map(x => x.dataValues);
        return { 'response': todosLosNodos };
    }
}

module.exports = NodoService;