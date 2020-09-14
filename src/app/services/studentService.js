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
	}
}

module.exports = StudentService;