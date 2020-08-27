module.exports = {
  host: process.env.SQL_URL || 'localhost',
  dialect: process.env.SQL_DIALECT || 'mysql',
  database: process.env.SQL_DATABASENAME || 'empatkali',
  username: process.env.SQL_USER || 'root',
  password: process.env.SQL_PASSWORD || 'new-password',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // disable logging; default: console.log // show query
  logging: false,
  define: {
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    paranoid: true
  }
}
