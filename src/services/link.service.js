const Link = require('../db/models/link.model');
const Url = require('../db/models/url.model');
const { nanoid } = require('nanoid');
const Response = require('../models/response.model');

const createShortUrl = async (dto, origin) => {
  try {
    const result = new Response();
    const newLink = new Link({
      link: dto.link,
    });
    await newLink.save();

    const url = new Url({
      _linkId: newLink._id,
      url: origin + '/' + nanoid(8),
    });

    await url.save();
    result.code = 201;
    result.success = true;
    result.body = {
      url: url.url,
    };
    result.message = 'Link Created';
    return result;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  createShortUrl,
};
