const fs = require('fs')
const express = require('express')
const yaml = require('js-yaml')
const horizon = require('@horizon/server');

const app = express()
app.post('get_fucking_new_user', (req, res) => {
  // TODO create one if not existed
  // TODO get username from webtask endpoint
})

const server = app.listen(8181)

const base_config = yaml.safeLoad(fs.readFileSync(__dirname + '/hz-config.yml'))
const horizonServer = horizon(server,
  Object.assign(base_config,
    process.env.NODE_ENV === 'development' ? {
      auto_create_collection: true,
      auto_create_index: true,
      permissions: false,
      debug: true
    } : {}
  )
)