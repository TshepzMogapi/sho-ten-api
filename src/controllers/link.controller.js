const linkService = require('../services/link.service');

const createShortUrl = async (req, res) => {
  try {
    console.log('createShortUrl');
    const result = await linkService.createShortUrl(req.body);
    res.status(result.code).send(result);
  } catch (error) {}
};

module.exports = { createShortUrl };
