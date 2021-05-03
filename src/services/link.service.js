const Link = require('../db/models/link.model');
const Url = require('../db/models/url.model');
const { nanoid } = require('nanoid');
const Response = require('../models/response.model');

const createShortUrl = async (dto) => {
  try {
    let link = await Link.findOne({
      link: dto.link,
    });

    const result = new Response();

    if (link) {
      console.log('Link already exist');
      result.code = 409;
      result.message = 'Link already exist';
      return result;
    }

    if (!link) {
      const newLink = new Link({
        link: dto.link,
      });

      await newLink.save();

      console.log('Link Created');
      console.log(newLink._id);

      const url = new Url({
        _linkId: newLink._id,
        url: nanoid(8), //Domain concat
      });

      result.code = 201;
      result.success = true;
      result.message = 'Link Created';
      return result;
    }
  } catch (error) {}
};

module.exports = {
  createShortUrl,
};
