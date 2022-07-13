import Sequelize from "sequelize";

const sequelize = new Sequelize("mydb", "postgres", "yourpassword", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
