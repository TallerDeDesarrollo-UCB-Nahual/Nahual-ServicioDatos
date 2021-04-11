const { Inscripto, Estudiante, Curso } = require('../models');
const InscriptoService = {

    mostrarInscriptos: async() => {
        let todosLosInscriptos = await Inscripto.findAll({
            attributes: {exclude: ['estudianteId','cursoId']},
            include: [
            {
                model: Estudiante,
                as: 'estudiante',
                attributes: {exclude: ['estudianteId']}
            },
            {
                model: Curso,
                as: 'curso',
                attributes: {exclude: ['cursoId']}
            }],
        });
        return { 'response': todosLosInscriptos };
    },
    
    inscribirVarios: async(request, response) => {
        var inscriptos = request.body;
        var resultado = [];
        var codigo;
        for(const inscripto of inscriptos ){
            let estudiante = await Estudiante.findByPk(inscripto.estudianteId);
            let estaInscripto = await Inscripto.findAll({
                where: {
                    estudianteId: inscripto.estudianteId,
                    cursoId: inscripto.cursoId
                }
            });
            if(estaInscripto.length == 0){
                if(estudiante == null){
                    resultado.push({ Operacion: "El estudiante con id " + inscripto.estudianteId + " no existe"});
                    codigo = 400;
                }
                else{
                    let curso = await Curso.findByPk(inscripto.cursoId);
                    if(curso == null){
                        resultado.push({ Operacion: "El curso con id " + inscripto.cursoId + " no existe"});
                        codigo = 400;
                    }
                    else{
                        if(estudiante.estadoId == 1){
                            estudianteActualizado = {
                                "nodoId": curso.NodoId,
                                "sedeId": curso.SedeId,
                                "estadoId": 2
                            }
                            await Estudiante.update(estudianteActualizado, { where: { id: inscripto.estudianteId } });
                            await Inscripto.create(inscripto);
                            resultado.push({ Operacion: "Se registro correctamente"});
                            codigo = 200;
                        }
                        else{
                            resultado.push({ Operacion: "El estudiante no es un pre-inscripte"});
                            codigo = 400;
                        } 
                    }
                }
            }
            else{
                resultado.push({ Operacion: "El estudiante ya se encuentra inscripto a un curso"});
                codigo = 400;
            }     
        };  
        return {message: resultado, result: codigo}; 
    },

    inscribir: async(request, response) => {
        var inscripto = request.body;
        var resultado = [];
        var codigo;
        let estudiante = await Estudiante.findByPk(inscripto.estudianteId);
        let estaInscripto = await Inscripto.findAll({
            where: {
                estudianteId: inscripto.estudianteId,
                cursoId: inscripto.cursoId
            }
        });
        if(estaInscripto.length == 0){
            if(estudiante == null){
                resultado.push({ Operacion: "El estudiante con id " + inscripto.estudianteId + " no existe"});
                codigo = 400;
            }
            else{
                let curso = await Curso.findByPk(inscripto.cursoId);
                if(curso == null){
                    resultado.push({ Operacion: "El curso con id " + inscripto.cursoId + " no existe"});
                    codigo = 400;
                }
                else{
                    if(estudiante.estadoId == 1){
                        estudianteActualizado = {
                            "nodoId": curso.NodoId,
                            "sedeId": curso.SedeId,
                            "estadoId": 2
                        }
                        await Estudiante.update(estudianteActualizado, { where: { id: inscripto.estudianteId } });
                        await Inscripto.create(inscripto);
                        resultado.push({ Operacion: "Se registro correctamente"});
                        codigo = 200;
                    }
                    else{
                        resultado.push({ Operacion: "El estudiante no es un pre-inscripte"});
                        codigo = 400;
                    } 
                }
            }
        }
        else{
            resultado.push({ Operacion: "El estudiante ya se encuentra inscripto a un curso"});
            codigo = 400;
        }    
        return {message: resultado, result: codigo}; 
    },

    desinscribir:async(request, response) => {
        var desinscripto = request.body;
        var resultado = [];
        var codigo;
        let estudiante = await Estudiante.findByPk(desinscripto.alumneId);
        let estaInscripto = await Inscripto.findAll({
            where: {
                estudianteId: desinscripto.alumneId,
                cursoId: desinscripto.cursoId
            }
        });
        if(estaInscripto.length == 0){
            resultado.push({ Operacion: "El estudiante no se encuentra inscripto a un curso"});
            codigo = 400;
        }
        else{
            if(estudiante == null){
                resultado.push({ Operacion: "El estudiante con id " + desinscripto.alumneId + " no existe"});
                codigo = 400;
            }
            else{
                let curso = await Curso.findByPk(desinscripto.cursoId);
                if(curso == null){
                    resultado.push({ Operacion: "El curso con id " + desinscripto.cursoId + " no existe"});
                    codigo = 400;
                }
                else{
                    if(estudiante.estadoId == 2){
                        estudianteActualizado = {
                            "nodoId": curso.NodoId,
                            "sedeId": curso.SedeId,
                            "estadoId": 1
                        }
                        await Inscripto.delete(desinscripto);
                        await Estudiante.update(estudianteActualizado, { where: { id: desinscripto.alumneId } });
                        resultado.push({ Operacion: "Se elimino la inscripcion correctamente"});
                        codigo = 200;
                    }
                    else{
                        resultado.push({ Operacion: "El estudiante no es un pre-inscripte"});
                        codigo = 400;
                    } 
                }
            }
        }

    }

    
}

module.exports = InscriptoService;