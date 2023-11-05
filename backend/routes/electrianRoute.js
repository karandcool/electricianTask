const { Router } = require("express");
const ElectricianController = require("../controller/electricianController")
const router = Router();

router.get('/',  ElectricianController.getAll)
router.post('/',  ElectricianController.create)
router.put('/',  ElectricianController.update)
router.delete('/',  ElectricianController.delete)



module.exports = router;