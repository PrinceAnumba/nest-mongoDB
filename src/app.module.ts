import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UsersSettingsModule } from './user-settings/user-settings.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nestjs-mongodb'),
    UsersModule,
    UsersSettingsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
