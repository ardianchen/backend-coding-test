'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('rides', {
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
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
