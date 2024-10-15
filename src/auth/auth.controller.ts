import { Controller, Get, Post, Body, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('register')  
  @ApiOperation({description:'TO register a new user with email.', summary: 'register a user with details'}) 

  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }
  

  @Post('login')
  @ApiOperation({description:'login with email.', summary: 'Endpoint to login with user email'}) 

  Login(@Body() loginData: LoginDto){
  return this.authService.login(loginData)
}
}

