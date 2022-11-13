const Menu = require('../models/menu-drink')

exports.getMenus = (req, res) => {
    Menu.find({}).exec((err,menu) => {
        if(err) return res.status(400).json({message: "มีบางอย่างผิดพลาด"})
        res.json(menu)
    })
}