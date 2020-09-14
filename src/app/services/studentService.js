const StudentModel = require('../models/student');
const StudentService = {
	findGraduatedStudents: async (request, response) => {
		let allStudents = await StudentModel.findAll({
			where: {
				statusName: 'Egresade'
			}
		});
		allStudents = allStudents.map(x => x.dataValues);
		return { 'resultSet': allStudents };
	},

	filterStudentsByEnglishLevel: async (request, response) => {
		console.log("------------",request.query)
		let allStudents = await StudentModel.findAll({
			where: {
				englishLevel: request.query.englishLevel,
				statusName: request.query.statusName,
				isEmployed: request.query.isEmployed
			}
		});
		allStudents = allStudents.map(x => x.dataValues);
		return { 'resultSet': allStudents };
	}
}

module.exports = StudentService;