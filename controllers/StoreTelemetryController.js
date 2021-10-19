'use strict'

const TelemetryModel = require("../models/TelemetryModel")

class StoreTelemetryController{
    static async __invoke(req,res){
        TelemetryModel.create(req.body , function (err, data) {
            if (err) throw err
            res.send(data);
          });
    }
}
module.exports = StoreTelemetryController;