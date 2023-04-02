const router = require('express').Router();
// imports your apis for the index.js routes in the api folder 
const apiRoutes = require ('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
    // Error Message 
    res.status(404).send("<h1> 404 Error <h1>");
});

module.exports = router;