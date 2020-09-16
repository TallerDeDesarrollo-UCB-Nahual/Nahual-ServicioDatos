'use strict';
class StudentDTO {
	constructor(student) {
		this.id = student.id;
		this.fullName = student.fullName;
		this.module = student.module;
		this.englishLevel = student.englishLevel;
		this.nodeName = student.nodeName;
	}
}

module.exports = StudentDTO;