'use strict'
const axios = require('axios');

class ResetDeviceController {

    static async __invoke(req, res) {
        const deviceId = req.params.deviceId;
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
    }
}

module.exports = ResetDeviceController;