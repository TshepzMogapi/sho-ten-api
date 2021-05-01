const Link = require('../db/models/link.model');
const Url = require('../db/models/url.model');

const createShortUrl = async (dto) => {
  try {
    let link = await Link.findOne({
      link: dto.link,
    });

    if (link) {
      console.log('Link already exist');
    }

    if (!link) {
      const link = new Link({
        link: dto.link,
      });

      await link.save();

      console.log('Link Created');

      const url = new Url({
        _linkId: link._id,
        url: 'abcd',
      });
    }
  } catch (error) {}
};

module.exports = {
  createShortUrl,
};
