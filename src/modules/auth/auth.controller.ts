import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthRequestEntity } from './entities/auth-request.entity';
import { AuthResponseEntity } from './entities/auth-response.entity';
import { ErrorEntity } from 'src/entities/error.entity';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Try authorization' })
  @ApiResponse({ status: 200, type: AuthResponseEntity })
  @ApiResponse({ status: 401 })
  async auth(@Body() user: AuthRequestEntity, @Res() res: Response) {
    const { username, password } = user;
    try {
      const authData = await this.service.auth(username, password);
      res.status(200).send(authData);
    } catch (e) {
      res.status(401).send();
    }
  }
}
