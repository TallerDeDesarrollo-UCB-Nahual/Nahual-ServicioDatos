'use stric';
const express = require('express');
const router = express.Router();
const routeNames = require('../resources/routeNames');
const studentService = require('../app/services/student');


router.put('/:id',async (req,res)=>{
    try {
        const result = await studentService.update(req,res)
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;