const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return User;
};

module.exports = UserModel;
