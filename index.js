const express = require('express')
const app = express()
const port = 80
const axios = require('axios');

app.use('/', express.static(__dirname + '/public'));


app.get('/api/get-clients', async(req, res) => {
    await axios.get("http://20.65.118.16:8081/api/v4/clients/", {
            auth: {
                username: "admin",
                password: "public"
            }
        })
        .then(data => {
            res.send(data.data)
        })
        .catch(err => {
            res.send(err).status(500);
        });
});

app.post('/api/reset-device/:deviceId', async(req, res) => {
    const deviceId = req.params.deviceId;
    console.log(deviceId);
    await axios.post("http://20.65.118.16:8081/api/v4/mqtt/publish", {
            "topic": "reset.device/" + deviceId,
            "payload": true,
            "qos": 1,
            "retain": false
        }, {
            auth: {
                username: "admin",
                password: "public"
            }
        })
        .then(data => {
            res.send(data.data)
        })
        .catch(err => {
            res.send(err).status(500);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})