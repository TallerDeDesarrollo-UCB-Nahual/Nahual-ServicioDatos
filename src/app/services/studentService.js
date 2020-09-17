const StudentModel = require('../models/student');
const StudentDTO = require('../models/DTOs/studentDTO');
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

	findUnemployedGraduatedStudents: async (request, response) => {
		let allUnemployedGraduates = await StudentModel.findAll({
			where: {
				statusName: 'Egresade',
				isEmployed: false
			}
		});
		allUnemployedGraduates = allUnemployedGraduates.map(x => new StudentDTO(x.dataValues));
		return { 'resultSet': allUnemployedGraduates };
	},

	filterStudentsByEnglishLevel: async (request, response) => {
		let allStudents = await StudentModel.findAll({
			where: {
				englishLevel: request.query.englishLevel,
				statusName: request.query.statusName,
				isEmployed: request.query.isEmployed
			}
		});
		allStudents = allStudents.map(x => x.dataValues);
		return { 'resultSet': allStudents };
	},

	filterStudentsByModule: async (request, response) => {
		let allStudents = await StudentModel.findAll({
			where: {
				module: request.query.module,
				statusName: request.query.statusName,
				isEmployed: request.query.isEmployed
			}
		});
		allStudents = allStudents.map(x => x.dataValues);
		return { 'resultSet': allStudents };
	}
}

module.exports = StudentService;