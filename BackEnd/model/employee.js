const mongoose = require('mongoose');
const Employee = mongoose.model('employee', {
    ename: 
    {
        type: String
    },
    eposition:
    {
        type: String
    },
    elocation:
    {
        type: String
    },
    esalary:
    {
        type: Number
    }
})

module.exports = Employee;