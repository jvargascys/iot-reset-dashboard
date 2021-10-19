const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TelemetrySchema = new Schema({},{strict:false});
module.exports = mongoose.model('telemetry', TelemetrySchema);