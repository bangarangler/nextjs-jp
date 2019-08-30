require('dotenv').config();
const express = require('express');
const path = require('path');
const next = require('next');
const mongoose = require('mongoose');
const routes = require('../routes.js');

// SERVICES
const authService = require('./services/auth.js');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
//const handle = app.getRequestHandler()
const handle = routes.getRequestHandler(app);
const config = require('./config')

const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book.js');
const portfolioRoutes = require('./routes/portfolio.js');
const blogRoutes = require('./routes/blog.js');

const robotsOptions = {
  root: path.join(__dirname, '../static'),
  headers: {
    'Content-Type': "text/plain;charset=UTF-8"
  }
}

const secretData = [
  {
    title: 'SecretData 1',
    description: 'Plans of how to build spaceship.',
  },
  {
    title: 'SecretData 2',
    description: 'My secret pws',
  },
];


mongoose
  .connect(config.DB_URI, {useNewUrlParser: true})
  .then(() => console.log('Database Connected!'))
  .catch(err => console.log(err));

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use('/api/v1/books', bookRoutes);
    server.use('/api/v1/portfolios', portfolioRoutes)
    server.use('/api/v1/blogs', blogRoutes)

    server.get('/robots.txt', (req, res) => {
      return res.status(200).sendFile('robots.txt', robotsOptions);
    })

    //server.use(handle)

    //old next version way of fixing
    //server.get('/portfolio/:id', (req, res) => {
    //console.log('serving /portfolio/:id requests')
    //const actualPage = '/portfolio'
    //const queryParams = { id: req.params.id }
    //app.render(req, res, actualPage, queryParams)
    //})

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    server.get(
      '/api/v1/onlysiteowner',
      authService.checkJWT,
      authService.checkRole('siteOwner'),
      (req, res) => {
        return res.json(secretData);
      },
    );

    server.get('*', (req, res) => {
      //console.log('Serving all of the requests')
      return handle(req, res);
    });


    server.use(function(err, req, res, next) {
      if (err.name === 'UnauthorizedError') {
        res
          .status(401)
          .send({title: 'Unauthorized', detail: 'Unauthorized access'});
      }
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`Ready on ${PORT}`);
    });
  })
  .catch(err => {
    console.error(ex.stack);
    process.exit(1);
  });
