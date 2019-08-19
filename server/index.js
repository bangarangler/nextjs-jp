const express = require('express');
const next = require('next');
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

  server.get('*', (req, res) => {
    //console.log('Serving all of the requests')
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`Ready on http://localhost:3000`);
  })
}).catch((err) => {
  console.error(ex.stack)
  process.exit(1)
})
