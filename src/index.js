import app from "./app.js";
import sequelize from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(3000);
    console.log("serving on port ", 3000);
  } catch (error) {
    console.log("error");
  }
}

main();
