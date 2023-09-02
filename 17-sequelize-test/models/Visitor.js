const VisitorModel = (sequelize, DataTypes) => {
  const Visitor = sequelize.define(
    'visitor',
    {
      identity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      userName: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      userPass: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Visitor;
};

module.exports = VisitorModel;
