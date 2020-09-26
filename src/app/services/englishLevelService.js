const { EnglishLevel } = require('../models');
const EnglishLevelService = {
	findAll: async (request, response) => {
		let allEnglishLevels = await EnglishLevel.findAll();
		allEnglishLevels = allEnglishLevels.map(x => x.dataValues);
		return { 'response': allEnglishLevels };
	}
}

module.exports = EnglishLevelService;