const Joi = require('joi');

const createLophoc = {
  body: Joi.object().keys({
    malh: Joi.string().required(),
    tenlop: Joi.string().optional(),
    soluongsv: Joi.number().optional(),
    magv: Joi.string().optional(),
  }),
};

const getLophocs = {
  query: Joi.object().keys({
    malh: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLophoc = {
  params: Joi.object().keys({
    malh: Joi.string().required(),
  }),
};

const updateLophoc = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      tenlop: Joi.string().optional(),
      soluongsv: Joi.number().optional(),
      magv: Joi.string().optional(),
    })
    .min(1),
};

const deleteLophoc = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createLophoc,
  getLophocs,
  getLophoc,
  updateLophoc,
  deleteLophoc,
};
