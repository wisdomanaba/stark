const express = require('express')
const jobs = express.Router()
const cors = require('cors')

// Job Model
const Job = require('../models/Job')

jobs.use(cors())

// @route   POST job/
// @desc    create A Job
// @access  Public
jobs.post('/', (req, res) => {
    const data = {
        job_title: req.body.job_title,
        employer: req.body.employer,
        location: req.body.location,
        job_type: req.body.job_type,
        job_summary: req.body.job_summary,
        job_description: req.body.job_description
    }

    const newJob = new Job(data)

    newJob.save()
        .then(job => {
            console.log(job)
            res.json({ message: 'Job added successfully...', job })
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ err })
        })
})

// @route   GET applicant/
// @desc    Get All jobs
// @access  Public
jobs.get('/', (req, res) => {
      Job.find()
          .then(jobs => {
                console.log(jobs)
                res.status(200).json({
                  data: jobs
                })
          })
          .catch(err => {
                console.log(err)
                res.status(404).json({ error: err })
          })
})


jobs.get("/:id", async (req, res) => {
      let { id } = req.params

      Job.findOne({ _id: id })
            .then(job => {
              if (job) {
                res.status(200).json({
                  data: job
                })
              } else {
                res.send('Job does not exist')
              }
            })
            .catch(err => {
              res.send(err)
      })
})

module.exports = jobs