const mongoose = require('mongoose')
mongoose.Promise = Promise


let mongoURI = ''
if(process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/presentationsdb"
}

mongoose.connect(mongoURI, { useNewUrlParser: true })
module.exports = mongoose

// heroku config:set ....
// original URL:
// mongodb+srv://dbadmin:<password>@cluster0-icgoa.mongodb.net/test?retryWrites=true&w=majority
// add <password>, run ----
// heroku config:set DB_URL="mongodb+srv://dbadmin:dbadmin@cluster0-icgoa.mongodb.net/test?retryWrites=true&w=majority"

// heroku config:set DB_URL="mongodb+srv://dbadmin:dbpassword@cluster0-tqlax.mongodb.net/test?retryWrites=true&w=majority"