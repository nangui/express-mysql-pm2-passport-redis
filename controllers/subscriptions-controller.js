const router = require('express').Router()
const asyncWrapper = require('../utilities/async-wrapper').AsyncWrapper
const SubscriptionsController = require('../services/subscriptions-service') 

const subscriptionsService = new SubscriptionsController()

// GET api/subscriptions
router.get('/', asyncWrapper(async(req, res) => {
  const userId = null
  const subscriptions = await subscriptionsService.findAll(userId)
  res.send(subscriptions)
}))

// GET api/subscriptions/:id
router.get('/:id', asyncWrapper(async(req, res) => {
  const id = req.params.id
  const userId = null
  const subscription = await subscriptionsService.findOne(id)
  res.send(subscription)
}))

// POST api/subscriptions
router.post('/', asyncWrapper(async(req, res) => {
  const subscription = await subscriptionsService.create(req.body)
  res.send(subscription)
}))

// PATCH api/subscriptions/:id
router.patch('/:id', asyncWrapper(async(req, res) => {
  const id = req.params.id
  const subscription = await subscriptionsService.update(id, req.body)
  res.send(subscription)
}))

// DELETE api/subscriptions/:id
router.delete('/:id', asyncWrapper(async(req, res) => {
  const id = req.params.id
  await subscriptionsService.delete(id)
  res.sendStatus(200);
}))

module.exports = router

