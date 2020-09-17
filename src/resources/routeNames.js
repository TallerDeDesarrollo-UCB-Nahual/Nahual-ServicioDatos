'use strict';

module.exports = {
	emptyUrl: '',
	headquarters: {
		url: '/headquarters',
	},
	nodes: {
		url: '/nodes'
	},
	englishLevels: {
		url: '/english-levels'
	},
	modules: {
		url: '/modules'
	},
	students: {
		graduated: {
			url: '/graduateds',
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
