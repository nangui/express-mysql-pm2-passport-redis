const Plan = require('../models/index')['Plan']

module.exports = class PlansController {
  async findAll(userId) {
    return await Plan.findAll({ where: { userId } })
  }

  async findOne(id) {
    return await Plan.findOne({ where: { id } })
  }

  async create(plan) {
    return await Plan.create(plan)
  }

  async update(id, plan) {
    return await Plan.update(plan, { where: { id } })
  }

  async delete(id) {
    return await Plan.destroy({ where: { id } })
  }
}
