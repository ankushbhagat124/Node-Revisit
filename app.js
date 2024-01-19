const eventEmitter = require('events')

const myEmitter = new eventEmitter()

myEmitter.on('newSale', () => {
  console.log('There was a new sale!')
})

myEmitter.emit('newSale')
