import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './modules/coffees/coffees.module';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CoffeesModule, DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
