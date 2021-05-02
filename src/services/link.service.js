const Link = require('../db/models/link.model');
const Url = require('../db/models/url.model');
const nanoid = require('nanoid');
const Response = require('../models/response.model');

const createShortUrl = async (dto) => {
  try {
    let link = await Link.findOne({
      link: dto.link,
    });

    const result = new Response();

    if (link) {
      console.log('Link already exist');
      result.success = false;
      result.code = 409;
      result.message = 'Link already exist';

      return result;
    }

    console.log(result);

    if (!link) {
      // const link = new Link({
      //   link: dto.link,
      // });

      // await link.save();

      console.log('Link Created');

      // const url = new Url({
      //   _linkId: link._id,
      //   url: nanoid(8),
      // });
    }
  } catch (error) {}
};

module.exports = {
  createShortUrl,
};
