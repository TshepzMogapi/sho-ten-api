const linkService = require('../services/link.service');

const createShortUrl = async (req, res) => {
  try {
    const origin = req.headers.origin;
    const result = await linkService.createShortUrl(req.body, origin);
    console.log(result);
    res.status(result.code).send(result);
  } catch (error) {}
};

module.exports = { createShortUrl };
