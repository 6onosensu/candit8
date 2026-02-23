import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  ok() {
    return { 
      status: 'ok',
      uptime: process.uptime(),
      time: new Date().toISOString(),
    };
  }
}
