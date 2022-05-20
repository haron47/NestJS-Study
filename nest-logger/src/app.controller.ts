import {Controller, Get, Inject} from '@nestjs/common';
import {AppService} from "./app.service";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  createLog(): Promise<void> {
    return  this.appService.createLog();
  }
}
