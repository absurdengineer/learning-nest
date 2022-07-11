export const databaseConfig = {
  development: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'Password@123',
    database: 'learning_nest',
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
