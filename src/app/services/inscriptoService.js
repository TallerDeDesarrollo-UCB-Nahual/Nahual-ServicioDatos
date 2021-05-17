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
                        var estado = (estudiante.estadoId === 2) ? 5 : 1;
                        console.log("VARIOS      ---          "+estado);
                        estudianteActualizado = {
                            "nodoId": curso.NodoId,
                            "sedeId": curso.SedeId,
                            "estadoId": estado,
                        }
                        await Estudiante.update(estudianteActualizado, { where: { id: inscripto.estudianteId } });
                        await Inscripto.create(inscripto);
                        resultado.push({ Operacion: "Se registro correctamente"});
                        codigo = 200;
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
        console.log(estudiante);
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
                    var estado = (estudiante.estadoId === 2) ? 5 : 1;
                    console.log("Solo 1       - ---          "+estado);
                    estudianteActualizado = {
                        "nodoId": curso.NodoId,
                        "sedeId": curso.SedeId,
                        "estadoId": estado,
                    }
                    await Estudiante.update(estudianteActualizado, { where: { id: inscripto.estudianteId } });
                    await Inscripto.create(inscripto);
                    resultado.push({ Operacion: "Se registro correctamente"});
                    codigo = 200;
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
        var resultado = [];
        var codigo;
        await Inscripto.destroy({ 
            where: { id: request.params.id }
        });                        
        resultado.push({ Operacion: "Se elimino la inscripcion correctamente"});
        codigo = 200;
        return {message: resultado, result: codigo}; 
    }
}

module.exports = InscriptoService;