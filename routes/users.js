const express = require('express')

const router = express.Router()

router.get('/', (reqm, res) => {
  res.send('Users Page')
})

router.get('/new', (req, res) => {
  res.send('New users page')
})

router.get('/:id', (req, res) => {
  //   console.log(req)
  res.send(`User ID: ${req.params.id}`)
})

module.exports = router
