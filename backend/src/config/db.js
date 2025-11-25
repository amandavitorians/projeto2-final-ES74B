const mongoose = require('mongoose');

async function connectDB(uri) {
  return mongoose.connect(uri, {
    maxPoolSize: 10,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = { connectDB, mongoose };
