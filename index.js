const express = require('express')
const app = express()
const port = 4000

const GetClientsController = require('./controllers/GetClientsController');
const ResetDeviceController = require('./controllers/ResetDeviceController');
const TurnLedDeviceController = require('./controllers/TurnLedDeviceController');

app.use('/', express.static(__dirname + '/public'));
app.get('/api/get-clients', GetClientsController.__invoke);
app.post('/api/reset-device/:deviceId', ResetDeviceController.__invoke);
app.post('/api/turn-led-device/:deviceId/:status', TurnLedDeviceController.__invoke);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})