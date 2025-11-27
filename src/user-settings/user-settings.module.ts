import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/Users.schema';
import { UsersSettingsService } from './user-settings.service';
import { UsersSettingsController } from './user-settings.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersSettingsController],
  providers: [UsersSettingsService],
})
export class UsersSettingsModule {}
