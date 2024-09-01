const {
    getLogin
} = require('../services/CRUDService');

const getHomePage = (req, res) => {
    res.render('home.ejs')
}

module.exports = {
    getHomePage
}