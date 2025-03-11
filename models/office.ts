import { User } from "./user";

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

export const Office = sequelize.define("office", {
  officeId: DataTypes.INTEGER,
  name: DataTypes.STRING,
  street: DataTypes.STRING,
  streetNo: DataTypes.INTEGER,
  city: DataTypes.STRING,
});

User.hasMany(Office, { foreignKey: "officeId" });
Office.belongsTo(User);

(async () => {
  await sequelize.sync({ force: true });
})();
