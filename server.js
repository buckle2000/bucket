const path = require('path')
const Gun = require('gun')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname, '/dist')))
const server = app.listen(80)
Gun({ file: 'data.json', web: server })