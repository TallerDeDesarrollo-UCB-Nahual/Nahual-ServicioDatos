'use strict';
const api = '/api';

module.exports = {
	emptyUrl: '',
	headquarters: {
		url: '/headquarters',
	},
	nodes: {
		url: api + '/nodes'
	},
	englishLevels: {
		url: api + '/english-levels'
	},
	modules: {
		url: api + '/modules'
	},
	students: {
		graduated: {
			url: api + '/graduateds',
			unemployeds: {
				url: '/unemployeds'
			},
			filterByEnglishLevel: {
				url: '/filterByEnglishLevel'
			},
			filterByModule: {
				url: '/filterByModule'
			},
		}
	}
};