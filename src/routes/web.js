const express = require('express')
const session = require('express-session');
const {
    getHomePage
} = require('../controllers/homeController')
const router = express.Router()
router.use(session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: true
}));

router.get('/', getHomePage)

module.exports = router;