const StudentModel = require('../models/student');
const StudentDTO = require('../models/DTOs/studentDTO');
const StudentService = {
	findGraduatedById: async (studentId) => {
		let graduate = await StudentModel.findByPk(studentId)
		return graduate;
	},
	findGraduatedStudents: async (request, response) => {
		let allStudents = await StudentModel.findAll({
			where: {
				statusName: 'Egresade'
			}
		});
		allStudents = allStudents.map(x => x.dataValues);
		return { 'resultSet': allStudents };
	},

	findUnemployedGraduatedStudents: async (parameters) => {
		let allUnemployedGraduates = await StudentModel.findAll({
			where: parameters
		});
		allUnemployedGraduates = allUnemployedGraduates.map(x => new StudentDTO(x.dataValues));
		return { 'resultSet': allUnemployedGraduates };
	}
}

module.exports = StudentService;