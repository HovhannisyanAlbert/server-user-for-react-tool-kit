import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptService } from 'src/crypt/crypt.service';
import { UsersService } from 'src/users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly cryptService: CryptService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getOneUser(username);
    if (!user) return null;
    const passwordValid = this.cryptService.verify(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async login(user: { username: string; role: string }) {
    const payload = {
      username: user.username,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
