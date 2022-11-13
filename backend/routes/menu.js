const express = require('express')
const router = express.Router()
const { getMenus } = require('../Controller/menu-controller')

router.get('/getMenus', getMenus);

module.exports = router;