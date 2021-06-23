const router = require('express').Router()
const asyncWrapper = require('../utilities/async-wrapper').AsyncWrapper
const PlansService = require('../services/plans-service') 
const validator = require('../middlerware/validator')
const Plan = require('../models/plan')

const plansService = new PlansService()

// GET api/plans
router.get('/', asyncWrapper(async (req, res) => {
  const userId = null
  const plans = await plansService.findAll(userId)
  res.send(plans)
}))

// GET api/plans/:id
router.get('/:id', asyncWrapper(async (req, res) => {
  const id = req.params.id
  const userId = null
  const plan = await plansService.findOne(id)
  res.send(plan)
}))

// POST api/plans
router.post('/', [ validator(Plan) ], asyncWrapper(async (req, res) => {
  console.log(req.body)
  const plan = await plansService.create(req.body)
  res.send(plan)
}))

// PATCH api/plans/:id
router.patch('/:id', asyncWrapper(async (req, res) => {
  const id = req.params.id
  const plan = await plansService.update(id, req.body)
  res.send(plan)
}))

// DELETE api/plans/:id
router.delete('/:id', asyncWrapper(async (req, res) => {
  const id = req.params.id
  await plansService.delete(id)
  res.sendStatus(200)
}))

module.exports = router
