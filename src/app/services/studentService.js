const { Student } = require('../models');
const StudentDTO = require('../models/DTOs/studentDTO');
const StudentService = {
	findStudents: async (request, response) => {
		let allStudents = await Student.findAll();
		allStudents = allStudents.map(x => x.dataValues);
		return { 'response': allStudents };
	},
	
	findGraduateById: async (studentId) => {
		let graduate = await Student.findByPk(studentId)
		return { 'response': graduate };
	},
	findGraduateStudents: async (request, response) => {
		let allStudents = await Student.findAll({
			where: {
				statusName: 'Egresade'
			}
		});
		allStudents = allStudents.map(x => x.dataValues);
		return { 'response': allStudents };
	},
	registerGradutateStudents: async (request, response) => {
		var students = request.body
		
		students.forEach(async student => {
			await Student.count({where:{fullName:student.fullName}}).then(async count=>{
				if(count!=0){
					await Student.update(student, {
						where:{
							fullName:student.fullName,
							statusName:'Egresade' 
						}
					})
				}
				else{
					await Student.create(student, {
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
            const result = await Student.update(request.body,
            {where:{id:request.params.id}});
            return {message : "Student information was updated successfully.", student:request.body };
        } catch (error) {
           throw error;
        }
	},
	createStudent: async (request, response) => {
        try {
            const result = await Student.create(request.body);
            return {message : "Student was created successfully.",result};
        } catch (error) {
           throw error;
        }
	},
	deleteStudent: async (request, response) => {
        try {
            const result = await Student.destroy(
            {where:{id:request.params.id}});
            return {message : "Student was deleted successfully.",result};
        } catch (error) {
           throw error;
		}
	},

	findUnemployeGraduateStudents: async (parameters) => {
		let allUnemployedGraduates = await Student.findAll({
			where: parameters
		});
		allUnemployedGraduates = allUnemployedGraduates.map(x => new StudentDTO(x.dataValues));
		return { 'response': allUnemployedGraduates };
	}
}

module.exports = StudentService;