'use strict';
class StudentDTO {
	constructor(student) {
		this.id = student.id;
		this.fullName = student.fullName;
		this.finishedCourses = student.module;
		this.englishLevel = student.englishLevel;
		this.node = student.nodeName;
	}
}

module.exports = StudentDTO;
