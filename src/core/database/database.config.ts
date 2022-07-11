export const databaseConfig = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
  },
  test: {
    dialect: '',
    host: '',
    port: '',
    username: '',
    password: '',
    database: '',
  },
  production: {
    dialect: '',
    host: '',
    port: '',
    name: '',
    password: '',
    database: '',
  },
};
