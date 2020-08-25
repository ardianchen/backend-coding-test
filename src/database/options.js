const path = require('path')
// import path from 'path'
// import { join } from 'path'
module.exports = {
  config: path.join('src/database/', 'config.js'),
  'migrations-path': path.join('src/database', 'migrations'),
  'seeders-path': path.join('src/database', 'seeders'),
  'models-path': path.join('src/', 'models')
}
