const Joi = require('joi')
const ValidationError = require('../errors/validation-error')

'use strict'

function validate(model, object) {
	return model.validate( object , {
    allowUnknown: true
	})
}

module.exports = function ValidationMiddleware(model) {
  return (req, res, next) => {
    const validationResult = validate(model, req.body)
    if (validationResult.error) {
      throw new ValidationError(validationResult.error.message, model)
    } else {
      next()
    }
  }
}
