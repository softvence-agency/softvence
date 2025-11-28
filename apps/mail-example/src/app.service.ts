import { Injectable } from '@nestjs/common';
import { MailService } from '@softvence/mail';

@Injectable()
export class AppService {
  constructor(private readonly service: MailService) {}
  getHello(): string {
    // const res = this.service.uploadFiles();
    return 'Hello World!';
  }
}
