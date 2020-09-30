const NivelInglesModel = require('../models/nivelIngles');
const NivelInglesService = {
    findAll: async(request, response) => {
        let todosLosNivelesIngles = await NivelInglesModel.findAll();
        todosLosNivelesIngles = todosLosNivelesIngles.map(x => x.dataValues);
        return { 'response': todosLosNivelesIngles };
    }
}

module.exports = NivelInglesService;