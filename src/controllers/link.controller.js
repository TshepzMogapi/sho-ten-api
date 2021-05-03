const linkService = require('../services/link.service');

const createShortUrl = async (req, res) => {
  try {
    const origin = req.headers.origin;
    const result = await linkService.createShortUrl(req.body, origin);
    console.log(result);
    res.status(result.code).send(result);
  } catch (error) {}
};

const getOriginalLink = async (req, res) => {
  try {
    console.log('Enter');
    console.log(req.query);
    const origin = req.headers.origin;
    const result = await linkService.getOriginalLink(req.query, origin);
    res.send(result);
  } catch (error) {}
};

module.exports = { createShortUrl, getOriginalLink };
