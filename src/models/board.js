const Sequelize = require('sequelize');

module.exports = (sequelize, Datatypes) => sequelize.define(
  'board',
  {
    board_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: Datatypes.STRING(10),
      allowNull: false,
    },
    title: {
      type: Datatypes.STRING(30),
      allowNull: false,
    },
    context: {
      type: Datatypes.TEXT,
      allowNull: false,
    },
    image: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    filed: {
      type: Datatypes.STRING(10),
      allowNull: false,
    },
    isDeleted: {
      type: Datatypes.BOOLEAN,
    },
    created_at: {
      type: Datatypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    Sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'Board',
    tableName: 'boards',
    paranoid: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);
