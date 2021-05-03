const express = require('express');
const router = new express.Router();
const linkController = require('../controllers/link.controller');

router.get('/links', linkController.getOriginalLink);
router.post('/links', linkController.createShortUrl);

module.exports = router;
