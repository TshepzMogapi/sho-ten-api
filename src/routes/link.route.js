const express = require('express');
const router = new express.Router();
const linkController = require('../controllers/link.controller');

router.get('/links', linkController.getOriginalLink);
router.get('/links/analytics', linkController.getLinkAnalytics);
router.post('/links', linkController.createShortUrl);

module.exports = router;
