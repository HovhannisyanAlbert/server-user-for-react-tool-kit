import { Controller, Post,Body,Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { createUser } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Post()
    create(@Body() dto:createUser){
        
        return this.userService.createUser(dto)
    }
    @Get()
    getAll(){
        return this.userService.getUsers()
    }

     @Post("/one")
    getOne(@Body() dto:createUser){
        return this.userService.getOneUser(dto.username)
    }
    
    @UseGuards(JwtAuthGuard)
    @Get("me")
    getMe(@Request() req) {
        return this.userService.getOneUser(req.user.username) 
    }
}
