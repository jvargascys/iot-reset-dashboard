'use strict'
const TelemetryModel = require("../models/TelemetryModel") 

class GetTelemetriesController{
    static async __invoke(req,res){
        const posts = await TelemetryModel.find();
        res.send(posts);
    }
}
module.exports = GetTelemetriesController;