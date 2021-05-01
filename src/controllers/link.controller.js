const linkService = require('../services/link.service');

const createShortUrl = async (req, res) => {
  try {
    console.log('createShortUrl');
    const result = await linkService.createShortUrl(req.body);
    console.log(result);

    res.status(200).send(result);
  } catch (error) {}
};

module.exports = { createShortUrl };
