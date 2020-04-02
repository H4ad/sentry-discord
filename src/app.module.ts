import { Module } from '@nestjs/common';

import { DiscordModule } from './modules/discord/discord.module';
import { EnvModule } from './modules/env/env.module';

@Module({
  imports: [
    EnvModule,
    DiscordModule,
  ],
  providers: [
    EnvModule,
  ],
})
export class AppModule {}
