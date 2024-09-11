import {  Module } from '@nestjs/common';
import { AppService } from './service/app.service';
import { TweetModule } from '../tweet/tweet.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { AppController } from './controller/app.controller';

@Module({
  imports: [TweetModule, UserModule, AuthModule],
  controllers: [ AppController],
  providers: [ AppService],
})
export class AppModule {}
