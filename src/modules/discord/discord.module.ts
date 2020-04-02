import { HttpModule, Module } from '@nestjs/common';

import { EnvModule } from '../env/env.module';
import { DiscordController } from './controllers/discord.controller';
import { DiscordService } from './services/discord.service';

@Module({
  imports: [
    HttpModule,
    EnvModule,
  ],
  providers: [
    DiscordService,
  ],
  controllers: [
    DiscordController,
  ],
})
export class DiscordModule {}
