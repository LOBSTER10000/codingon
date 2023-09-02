const BoardModel = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    'board',
    {
      boardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      header: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      content: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Board;
};

module.exports = BoardModel;
