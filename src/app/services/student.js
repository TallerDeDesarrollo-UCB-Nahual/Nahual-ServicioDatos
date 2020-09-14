const StudentModel = require('../models/student');

const StudentService = {
	update: async (request, response) => {
        try {
            const result = await StudentModel.update({
                FullName:request.body.FullName,
                Birthday:request.body.Birthday,
                Mail:request.body.Mail,
                Phone:request.body.Phone
            },
            {where:{id:request.params.id}});
            return {message : "Student pesonal information was updated successfully.",result};
        } catch (error) {
           throw error;
        }
	}
}

module.exports = StudentService;