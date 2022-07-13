import Sequelize from "sequelize";

const sequelize = new Sequelize("mydb", "postgres", "1903", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
