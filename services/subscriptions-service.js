const Subscription = require('../models/index')['Subscription']

module.exports = class SubscriptionsController {
  async findAll(userId) {
    return await Subscription.findAll({ where: { userId } })
  }

  async findOne(id) {
    return await Subscription.findOne({ where: { id } })
  }

  async create(subscription) {
    return await Subscription.create(subscription)
  }

  async update(id, subscription) {
    return await Subscription.update(subscription, { where: { id } })
  }

  async delete(id) {
    return await Subscription.destroy({ where: { id } })
  }
}
