import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { CryptModule } from 'src/crypt/crypt.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { jwtConstants } from './constants/jwtConstants';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    CryptModule,
    PassportModule,
    NestjsFormDataModule,
    JwtModule.register({
      secret: jwtConstants.secretKey,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
