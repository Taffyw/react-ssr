const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const mongoose = require('mongoose');
const DB_URL = 'mongodb://60.205.207.145:27017/app';
const USER = require('./server/model/user')
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9080');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.prepare()
  .then(() => {
    const server = express()
    server.use(allowCrossDomain);
    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('/about', (req, res) => {
      return app.render(req, res, '/about', req.query)
    })
    server.get('/error', (req, res) => {
      console.log(app.render(req, res, '/', req.query));
      return app.render(req, res, '/', req.query)
    })
    server.get('/api', (req, res) => {
      USER.find().exec((err, obj) => {
        res.json(obj)
      })
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    /**
     * 连接
     */
    mongoose.connect(DB_URL);

    /**
     * 连接成功
     */
    mongoose.connection.on('connected', function () {
      console.log('Mongoose connection open to ' + DB_URL);
      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
    });

    /**
     * 连接异常
     */
    mongoose.connection.on('error', function (err) {
      throw new Error('数据库连接失败！')
      console.log('Mongoose connection error: ' + err);
    });

    /**
     * 连接断开
     */
    mongoose.connection.on('disconnected', function () {
      console.log('Mongoose connection disconnected');
    });
  })
