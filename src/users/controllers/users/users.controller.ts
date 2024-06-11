import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers() {
    return [{ username: 'Andrew', email: 'andrew@gmail.com' }];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log('[ID]:', id);
    console.log('[POSTID]:', postId);
    return { id, postId };
  }
}
