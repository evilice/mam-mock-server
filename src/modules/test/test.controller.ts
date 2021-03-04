import { Controller, Get, Param, Query } from '@nestjs/common';

type Tquery = {
  path: string;
};

@Controller('test')
export class TestController {
  @Get()
  test(@Query() query: Tquery) {
    console.log({ query });
    return { status: 'ok' };
  }
}
