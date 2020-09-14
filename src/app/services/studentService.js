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
	updateStudent: async (request, response) => {
        try {
            const result = await StudentModel.update(request.body,
            {where:{id:request.params.id}});
            return {message : "Student pesonal information was updated successfully.",result};
        } catch (error) {
           throw error;
        }
	}
}

module.exports = StudentService;