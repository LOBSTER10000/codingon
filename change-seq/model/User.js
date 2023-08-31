const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },

      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: 'user', //실제 테이블명
      freezeTableName: true, // 복수 중복 불가
      timestamps: false,
    }
  );

  return model;
};

module.exports = User;
