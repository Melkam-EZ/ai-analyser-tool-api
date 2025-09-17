import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BedrockModule } from './common/bedrock';

@Module({
	imports: [BedrockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
