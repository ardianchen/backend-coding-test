// import mongoose from 'mongoose'
import Sequelize from 'sequelize'
import config from './config'

module.exports = (() => {
  return new Sequelize(
    process.env.SQL_DATABASENAME || 'empatkali',
    process.env.SQL_USER || 'admin',
    process.env.SQL_PASSWORD || 'password',
    config
  )
  // return new Sequelize('mysql://root:toor@localhost:3306/sample')
})()
