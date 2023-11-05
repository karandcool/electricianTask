
const Electrician = require("../model/electrician");
class electricianController {

    async create( req, res, next ) {
        try {
            const data = await Electrician.create(req.body);
            res.send(`Electrician Created ${data}`)
            
        } catch ( e ) {
            next( e );
        }
    }
    async getAll( req, res, next ) {
        try {
            const electricianData = await Electrician.find();
            res.send(electricianData)
         
        } catch ( e ) {
            next( e );
        }
    }
    async delete (req,res,next) {

    }
    async update(req,res,next) {

    }
}

module.exports = new electricianController;