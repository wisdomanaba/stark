const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
    job_title: {
        type: String,
        required: true
    },
    employer: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    job_type: {
        type: String,
        required: true
    },
    job_summary: {
        type: String,
        required: true
    },
    job_description: {
        type: Array,
        required: true
    }
})

module.exports = Job = mongoose.model('jobs', JobSchema)