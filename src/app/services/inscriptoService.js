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
                        resultado.push({ Operacion: "El curso con id " + inscripto.estudianteId + " no existe"});
                        codigo = 400;
                    }
                    else{
                        if(estudiante.estadoId == 1){
                            estudianteActualizado = {
                                "nodoId": curso.nodoId,
                                "sedeId": curso.sedeId,
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
                    resultado.push({ Operacion: "El curso con id " + inscripto.estudianteId + " no existe"});
                    codigo = 400;
                }
                else{
                    if(estudiante.estadoId == 1){
                        estudianteActualizado = {
                            "nodoId": curso.nodoId,
                            "sedeId": curso.sedeId,
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

    
}

module.exports = InscriptoService;