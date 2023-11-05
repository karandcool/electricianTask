const { Router } = require("express");
const SiteController = require("../controller/siteController")
const router = Router();

router.get('/',  SiteController.getAll)
router.post('/',  SiteController.create)
router.post('/updateElectrician',  SiteController.updateElectrician)
router.put('/:id',  SiteController.update)



module.exports = router;