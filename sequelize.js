const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = async () => {
  const pgPassword = encodeURIComponent(process.env.POSTGRES_PASSWORD);
  const url = `postgres://${process.env.POSTGRES_USER}:${pgPassword}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;
  const models = [__dirname];
  const sequelize = new Sequelize(url, {
    dialect: "postgres",
    models,
  });

  await sequelize
    .authenticate()
    .then(() => {
      console.log("sequelize is up!");
    })
    .catch((err) => {
      console.log(err);
    });
  return sequelize;
};

module.exports = {
  sequelize,
};
