const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
    job_title: {
        type: String
    },
    employer: {
        type: String
    },
    location: {
        type: String
    },
    job_type: {
        type: String
    },
    job_summary: {
        type: String
    },
    job_description: {
        type: String
    }
})

module.exports = Job = mongoose.model('jobs', JobSchema)