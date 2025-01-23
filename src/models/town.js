const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Town = sequelize.define('Town', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Town;
