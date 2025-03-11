const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

export const User = sequelize.define("user", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  phone: DataTypes.STRING,
  gender: DataTypes.STRING,
  serviceDepartment: DataTypes.JSON,
  birthdate: DataTypes.DATE,
  noOfOffices: { type: DataTypes.INTEGER, default: 0 },
  optionalComment: DataTypes.STRING,
  createdAt: DataTypes.DATE,
});
export const Office = sequelize.define("office", {
  officeId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  street: DataTypes.STRING,
  streetNo: DataTypes.INTEGER,
  city: DataTypes.STRING,
});

User.hasMany(Office);
Office.belongsTo(User);

(async () => {
  await sequelize.sync({ force: true });
})();
