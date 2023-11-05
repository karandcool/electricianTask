
const mongoose = require("mongoose")
const { Schema } = mongoose;

const siteSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  city: {
    type: String
  },
  AssignedElectritian: [{
    "electricianName": String,
    "electricianAssignDate": Date,


  }],
  InstallationDate: {
    type: Date
  },
  grievance : {
    type: Boolean
  },
});

const Sites = mongoose.model('sites', siteSchema);

module.exports = Sites