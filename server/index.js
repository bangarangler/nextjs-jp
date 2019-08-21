require('dotenv').config()
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes.js');

// SERVICES
const authService = require('./services/auth.js');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//const handle = app.getRequestHandler()
const handle = routes.getRequestHandler(app)

const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans of how to build spaceship.'
  },
  {
    title: 'SecretData 2',
    description: 'My secret pws'
  }
]

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@portfolio-nextjs-jp-1webv.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true }).then(() => console.log('Database Connected!')).catch(err => console.log(err))

app.prepare().then(() => {
  const server = express()
  //server.use(handle)

  //old next version way of fixing
  //server.get('/portfolio/:id', (req, res) => {
    //console.log('serving /portfolio/:id requests')
    //const actualPage = '/portfolio'
    //const queryParams = { id: req.params.id }
    //app.render(req, res, actualPage, queryParams)
  //})

  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData)
  })

  server.get('/api/v1/onlysiteowner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
    return res.json(secretData)
  })

  server.get('*', (req, res) => {
    //console.log('Serving all of the requests')
    return handle(req, res)
  })

  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title: 'Unauthorized', detail: 'Unauthorized access'})
    }
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`Ready on http://localhost:3000`);
  })
}).catch((err) => {
  console.error(ex.stack)
  process.exit(1)
})
