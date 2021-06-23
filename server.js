const express = require('express')
const dotenv = require('dotenv')
const Middleware = require('./middlerware/middleware')
const ErrorHandlingMiddleware = require('./middlerware/error-handling')

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

const PlansController = require('./controllers/plans-controller')
const SubscriptionController = require('./controllers/subscriptions-controller')

Middleware(app)

app.use('/api/plans', PlansController);
app.use('/api/subscriptions', SubscriptionController);

ErrorHandlingMiddleware(app)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
