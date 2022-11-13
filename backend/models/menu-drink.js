const mongoose = require('mongoose')
require('dotenv').config()
const drinkMenu = mongoose.Schema({
    uuid: Number, // เลขลำดับ
    picture: String, // รูป
    type: Number, // ประเภทเครื่องดื่ม 1.กาแฟ 2.นม 3.โซดา
    nameTh: String, // ชื่อไทย
    nameEng: String, // ชื่ออังกฤษ
    isCool: String, // ร้อน เย็น ปั่น
    price: Number, // ราคา
    promotion: String, //โปรโมชั่น
    isActive: Boolean, // แสดงว่าสินค้า หมด หรือ ไม่หมด
},{timestamp: true})

module.exports = mongoose.model(process.env.NAME_DATABASE,drinkMenu);