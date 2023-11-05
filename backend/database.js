const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const database = mongoose.connect('mongodb+srv://karansaini1996:7827231196@cluster0.mdgtskh.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = database

