const express = require("express")
const router = express.Router();

const GetClientsController = require('./controllers/GetClientsController');
const ResetDeviceController = require('./controllers/ResetDeviceController');
const TurnLedDeviceController = require('./controllers/TurnLedDeviceController');
const StoreTelemetryController = require("./controllers/StoreTelemetryController");
const GetTelemetriesController = require('./controllers/GetTelemetriesController')
// Get all telemetries
router.get('/telemetries', GetTelemetriesController.__invoke)
router.post('/telemetry',StoreTelemetryController.__invoke)
router.get('/get-clients', GetClientsController.__invoke);
router.post('/reset-device/:deviceId', ResetDeviceController.__invoke);
router.post('/turn-led-device/:deviceId/:status', TurnLedDeviceController.__invoke);

module.exports = router