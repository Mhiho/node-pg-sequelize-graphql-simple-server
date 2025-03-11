const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

export const User = sequelize.define("user", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  phone: DataTypes.STRING,
  gender: DataTypes.STRING,
  serviceDepartment: DataTypes.STRING,
  birthdate: DataTypes.DATE,
  noOfOffices: DataTypes.NUMBER,
  optionalComment: DataTypes.STRING,
  createdAt: DataTypes.DATE,
});

(async () => {
  await sequelize.sync({ force: true });
})();
