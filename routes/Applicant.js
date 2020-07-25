const express = require('express')
const applicants = express.Router()
const cors = require('cors')

// Applicant Model
const Applicant = require('../models/Applicant')

applicants.use(cors())

// @route   POST applicant/
// @desc    create A applicant
// @access  Public
applicants.post('/', (req, res) => {
    const data = {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        work_history: req.body.work_history
    }

    const newApplicant = new Applicant(data)

    newApplicant.save()
        .then(applicant => {
            console.log(applicant)
            res.json({ message: 'Applicant added successfully...', applicant })
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ err })
        })
})

// @route   GET applicant/
// @desc    Get All applicants
// @access  Public
applicants.get('/', (req, res) => {
    Applicant.find()
          .then(applicants => {
                console.log(applicants)
                res.status(200).json({
                    data: applicants
                })
          })
          .catch(err => {
                console.log(err)
                res.status(404).json({ error: err })
          })
})

module.exports = applicants