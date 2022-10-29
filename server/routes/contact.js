let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

// connect to our Contact Model
// let Contact = require('../models/contact');

var contactController = require('../controllers/contact');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET Route for the Contact List Page - READ Operation */
router.get('/', contactController.displayContactList);

/* GET Route for displaying Add Page - CREATE Operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing Add Page - CREATE Operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying Edit Page - UPDATE Operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing Edit Page - UPDATE Operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;
