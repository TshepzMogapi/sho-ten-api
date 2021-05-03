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

const getOriginalLink = async (dto, origin) => {
  try {
    const result = new Response();
    const url = await Url.findOne({ url: origin + '/' + dto.url });
    const originalLink = await Link.findOne({ _id: url._linkId });

    if (!originalLink) {
      result.code = 404;
      result.message = 'No link found';
      return result;
    }

    if (originalLink) {
      await url.generateAnalytics();
      result.code = 200;
      result.success = true;
      result.message = 'Link found';
      result.body = {
        link: originalLink.link,
      };
      return result;
    }
  } catch (error) {
    return new Error(error);
  }
};

const getLinkAnalytics = async (dto, origin) => {
  try {
    const result = new Response();
    const url = await Url.findOne({
      url: origin + '/' + dto.url,
    });

    if (url) {
      result.success = true;
      result.code = 200;
      result.message = 'Data retrieved successfully';
      result.body = {
        dates: url.dates,
      };
      return result;
    }
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  createShortUrl,
  getOriginalLink,
  getLinkAnalytics,
};
