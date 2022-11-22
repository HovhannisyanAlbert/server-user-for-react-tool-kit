import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CryptService } from 'src/crypt/crypt.service';
import { createUser } from './dto/create-user.dto';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private userRepository: typeof Users,
    private cryptService: CryptService
  ) {}
  async createUser(dto:createUser){
    dto.password = this.cryptService.encrypt(dto.password)
    const user = await this.userRepository.create(dto)
    return user
  }
  async getUsers(){
    const users =  await this.userRepository.findAll()
    return users
  }
  async getOneUser(username:string){
    const user = await this.userRepository.findOne({
      where: { username }
      
    });
    return user

  }
}
