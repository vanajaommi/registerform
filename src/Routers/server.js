var express = require('express')
var app = express()
var db = require('./db')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/api/products', (req, res) => {
  db.Product.find({}, function (err, products) {
    res.send(products)
  })
})
