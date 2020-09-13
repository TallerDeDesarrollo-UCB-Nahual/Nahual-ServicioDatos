
const Node = require('../models/node');
const nodeService = {
	findAll: async (request, response) => {
		response.statusCode = 200;
		const nodes = await Node.findAll();
		response.json(nodes);
		return response;
	}
}

module.exports = nodeService;