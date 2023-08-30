// visitor 모델 정의

const Visitor = (Sequelize, DataTypes) => {
  // Sequelize: model/index.js에서 sequelize
  // DataTypes : mode/index.js에서 sequelize
  const model = Sequelize.define(
    'visitor',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor', //실제 테이블명
      freezeTableName: true, // 복수 중복 불가
      timestamps: false,
    }
  );

  return model;
};

module.exports = Visitor;
