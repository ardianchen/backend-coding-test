import { database } from '../database'
import Sequelize from 'sequelize'

const table = 'rides'
const ride = database.define(table, {
  rideID: {
    type: Sequelize.INTEGER(35),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  startLat: {
    type: Sequelize.DECIMAL(4.2),
    allowNull: false
  },
  startLong: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  endLat: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  endLong: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  riderName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  driverName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  driverVehicle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  created: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
})

module.exports = ride
