import { Sequelize } from 'sequelize-typescript';
import { Coffee } from 'src/coffees/coffee.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'user',
        password: 'Password@123',
        database: 'learning_nest',
      });
      sequelize.addModels([Coffee]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
