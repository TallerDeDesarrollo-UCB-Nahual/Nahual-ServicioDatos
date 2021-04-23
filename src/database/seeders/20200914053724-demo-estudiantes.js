'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Estudiantes', 
        [
            {
                dni: '11111111',
                nombre: 'Nelson',
                apellido: 'Ramirez Sandi',
                nacionalidad: 'Argentino',
				fechaNacimiento: '1991-01-11T00:00:00.000Z',
				correo: 'nelson.ramirez@gcorreo.com',
				correoOpcional: 'nelson.sandi@gcorreo.com',
				celular: '10000001',
				linkedin: 'https://linkedin/nelson',
				zona: 'El prado BA',
                detalle: 'Educacion especial',
				añoGraduacion: 2019,
				nombrePrimerTrabajo: 'Tsoft',
                trabajaActualmente: false,
                trabajaSistemas: 'No trabaja en sistemas',
                experienciaSistemas: 'ninguno',
                estudiosSistemas: 'ninguno',
				topico: 'Testing funcional',
                estadoId: 1,
                sedeId: 1,
                nodoId: 1,
                nivelInglesId: 1,
            },
            {
                dni: '11111112',
                nombre: 'Celestino',
                apellido: 'Calero Alcocer',
                nacionalidad: 'Argentino',
				fechaNacimiento: '1991-01-11T00:00:00.000Z',
				correo: 'celestino.calero@gcorreo.com',
				celular: '10000002',
				linkedin: 'https://linkedin/celestino',
				zona: 'El prado BA',
                detalle: 'Educacion especial',
				añoGraduacion: 2019,
				nombrePrimerTrabajo: 'Tsoft',
                trabajaActualmente: false,
                trabajaSistemas: 'No trabaja en sistemas',
                experienciaSistemas: 'ninguno',
                estudiosSistemas: 'ninguno',
				topico: 'Testing funcional',
                estadoId: 2,
                sedeId: 1,
                nodoId: 2,
                nivelInglesId: 1,
            },
       
        ]);
    },
    
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Estudiantes', null, {});
    }
};