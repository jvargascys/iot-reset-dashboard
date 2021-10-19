'use strict'
const axios = require('axios');

class GetClientsController {

    static async __invoke(req, res) {
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
    }
}

module.exports = GetClientsController;