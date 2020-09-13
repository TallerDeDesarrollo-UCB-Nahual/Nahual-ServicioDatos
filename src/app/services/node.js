const Node = require('../models/node');
const nodeService = {
	findAll: async (request, response) => {
		response.statusCode = 200;
		response.set('Content-type', 'application/json');
		const allNodes = await Node.findAll();
		response.json({ 'resultSet': allNodes});
		return response;
	}
}

module.exports = nodeService;