
const mongoose = require("mongoose")
const { Schema } = mongoose;

const electricianSchema = new Schema({
  name: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  zone: [{
    type: String
  }],
  grievanceElectrician: Boolean
});

const Electrician = mongoose.model('electrician', electricianSchema);

module.exports = Electrician