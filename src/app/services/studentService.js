const StudentModel = require('../models/student');
const StudentService = {
	findGraduateStudents: async (request, response) => {
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
	}
}

module.exports = StudentService;