
const Electrician = require("../model/electrician");
const Site = require("../model/rawSiteData");
class siteController {

    async create( req, res, next ) {
        try {
            const data = await Site.create(req.body);
            res.send(`Site Created ${data}`)
            
        } catch ( e ) {
            next( e );
        }
    }
    async getAll( req, res, next ) {
        try {
            const siteData = await Site.find();
            res.send(siteData)
         
        } catch ( e ) {
            next( e );
        }
    }
    async updateElectrician (req,res,next) {
        const electrician = await Electrician.find({grievanceElectrician: req.body.grievance})
      const insertData =  electrician.map( async (data) => {
            const sites = await Site.find({ "AssignedElectritian.electricianName": data?.name})
            if(sites.length < 3) {
                
                const elecData= [{
                    electricianName: data?.name,
            electricianAssignDate:new Date()
                }]
                req.body.AssignedElectritian = elecData
                const sendData = await Site.findByIdAndUpdate(req.body._id, req.body)
                return  true

            } else{
                const anotherElectrician = await Electrician.find({grievanceElectrician: !req.body.grievance})
                const checkAvailable = anotherElectrician.map(async(dataa) => {
                    const sites = await Site.find({ "AssignedElectritian.electricianName": dataa?.name})
                    if(sites.length < 3) {
                        const elecData= [{
                            electricianName: dataa?.name,
                    electricianAssignDate:new Date()
                        }]
                        req.body.AssignedElectritian = elecData
                        const sendData = await Site.findByIdAndUpdate(req.body._id, req.body)
                        
                        return true
                    }else{
                        return false
                    }
                })
                
            }
            

        })
        res.send({
            status:200,
            message: insertData ? "updated successfully" : "cannt update"
        })
    }
    async update(req,res,next) {
        console.log(req.params, req.body)
        const data = await Site.findByIdAndUpdate(req.params.id, req.body )
        if(data) {
            res.send({
                status: 200,
                message: "updated sucessfully"
            })
        }

    }
}

module.exports = new siteController;