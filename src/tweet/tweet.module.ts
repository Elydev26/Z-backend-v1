import { Module } from '@nestjs/common';
import { TweetController } from './controller/tweet.controller';

@Module({
  controllers: [TweetController]
})
export class TweetModule {}
