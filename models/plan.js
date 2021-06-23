const Joi = require('joi')

module.exports = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().positive().allow(0).required(),
  userId: Joi.number().positive().required(),
})
