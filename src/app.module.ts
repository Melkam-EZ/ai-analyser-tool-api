import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BedrockModule } from './common/bedrock';
import { AnalysisModule } from './core/analysis';

@Module({
	imports: [AnalysisModule, BedrockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
