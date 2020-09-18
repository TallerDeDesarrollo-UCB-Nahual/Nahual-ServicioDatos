const StudentModel = require('../models/student');
const StudentDTO = require('../models/DTOs/studentDTO');
const StudentService = {
	findStudents: async (request, response) => {
		let allStudents = await StudentModel.findAll();
		allStudents = allStudents.map(x => x.dataValues);
		return { 'resultSet': allStudents };
	},
	
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
	registerGradutateStudents: async (request, response) => {
		var students = request.body
		
		students.forEach(async student => {
			await StudentModel.count({where:{fullName:student.fullName}}).then(async count=>{
				if(count!=0){
					await StudentModel.update(student, {
						where:{
							fullName:student.fullName,
							statusName:'Egresade' 
						}
					})
				}
				else{
					await StudentModel.create(student, {
						where:{
							statusName:'Egresade' 
						}
					})
				}	
			})
		})
        return 200
    },

	updateStudent: async (request, response) => {
        try {
            const result = await StudentModel.update(request.body,
            {where:{id:request.params.id}});
            return {message : "Student pesonal information was updated successfully.", student:request.body };
        } catch (error) {
           throw error;
        }
	},
	createStudent: async (request, response) => {
        try {
            const result = await StudentModel.create(request.body);
            return {message : "Student was created successfully.",result};
        } catch (error) {
           throw error;
        }
	},
	deleteStudent: async (request, response) => {
        try {
            const result = await StudentModel.destroy(
            {where:{id:request.params.id}});
            return {message : "Student was deleted successfully.",result};
        } catch (error) {
           throw error;
		}
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