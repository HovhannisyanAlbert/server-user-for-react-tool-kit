import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/users.model';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CryptModule } from './crypt/crypt.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'server',
      models:[Users],
      autoLoadModels:true
    }),
    CryptModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
