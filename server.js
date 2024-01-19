const express = require('express')

// console.log(express)
const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  //   res.status(500).send('Internal Error')
  //   res.status(500).json({ error: 'Internal Error' })
  // res.download('./server.js')
  res.render('index', { title: 'Express' })
})

const userRoute = require('./routes/users')
app.use('/users', userRoute)

app.listen(3000)
