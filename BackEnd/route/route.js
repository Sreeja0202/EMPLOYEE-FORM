const express = require('express');
const router = express.Router();

const Employee = require("../model/employee.js");

// post

router.post('/', (req,res)=>
{
    let emp = new Employee(
        {
            ename: req.body.ename,
            eposition: req.body.eposition,
            elocation: req.body.elocation,
            esalary: req.body.esalary
        }
    );
    emp.save((err, doc)=>
    {
        if(err)
        {
            console.log("Error in Post Data" +err);
        }
        else
        {
            res.send(doc);
        }
    })
})

module.exports = router;