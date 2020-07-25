const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicantSchema = new Schema({
    firstname: {
        type: String
    },
    middlename: {
        type: String
    },
    email: {
        type: String
    },
    workhistory: {
        type: Array
    }
})

module.exports = Applicant = mongoose.model('applicants', ApplicantSchema)