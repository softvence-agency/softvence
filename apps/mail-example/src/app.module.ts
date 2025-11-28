import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from '@softvence/mail';

@Module({
  imports: [
    MailModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'test@test.com',
          pass: 'test',
        },
      },
      // templateRenderer: (type, context) => {},
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
