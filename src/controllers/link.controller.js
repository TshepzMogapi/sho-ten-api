const linkService = require('../services/link.service');

const createShortUrl = async (req, res) => {
  try {
    // console.log('createShortUrl');
    const origin = req.headers.origin;
    console.log(origin);
    const result = await linkService.createShortUrl(req.body);
    console.log(result);
    res.status(result.code).send(result);
  } catch (error) {}
};

module.exports = { createShortUrl };
