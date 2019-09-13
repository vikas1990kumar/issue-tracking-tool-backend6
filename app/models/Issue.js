//importing mongoose module
const mongoose = require('mongoose')

//import schema
const Schema = mongoose.Schema;

let issueSchema = new Schema (
    {
        issueId :{
              type : String,
              unique : true
        },
        title : {
            type : String,
            default :''
        },
        description : {
            type : String,
            default :''
        },
        
        reporter : {
            type : String,
            default :''
        },
        
        status : {
            type : String,
            default :''
        },

        assignedTo : {
            type : String,
            default :''
        },
        
        created : {
            type : Date,
            default :Date.now
        },
        lastModified : {
            type : Date,
            default :Date.now
        }
    }
)

mongoose.model('Issue', issueSchema);