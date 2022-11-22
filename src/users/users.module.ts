import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.model';
import { CryptModule } from 'src/crypt/crypt.module';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[SequelizeModule.forFeature([Users]), CryptModule],
  exports:[UsersService]
})
export class UsersModule {}
