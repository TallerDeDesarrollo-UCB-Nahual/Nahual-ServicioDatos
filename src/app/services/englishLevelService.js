const EnglishLevelModel = require('../models/englishLevel');
const EnglishLevelService = {
	findAll: async (request, response) => {
		let allEnglishLevels = await EnglishLevelModel.findAll();
		allEnglishLevels = allEnglishLevels.map(x => x.dataValues);
		return { 'resultSet': allEnglishLevels };
	}
}

module.exports = EnglishLevelService;