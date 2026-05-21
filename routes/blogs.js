const express = require('express');
const router = express.Router();
const {requireAuth} = require('../middlewares/authMiddleware');

router.get('/', requireAuth, function (req, res, next) {
    const email = req.session.user.email;
    res.render('blogs', {email});
});

router.get('/new', requireAuth, function (req, res, next) {
    const email = req.session.user.email;
    res.render('new_blog', {email, error: null});
})

router.post('/new', requireAuth, function (req, res, next) {
    const {title, description, content} = req.body;
    const email = req.session.user.email;

    if (!title || !description || !content) {
        res.render('new_blog', {email, error: 'Missing required field'});
    }

    if (title.length > 40) {
        res.render('new_blog', {email, error: 'Title length must be less than 40 characters'});
    }

    if (description.length > 100) {
        res.render('new_blog', {email, error: 'Description length must be less than 100 characters'});
    }

    if (content.length > 2000) {
        res.render('new_blog', {email, error: 'Content length must be less than 2000 characters'});
    }
})

module.exports = router;