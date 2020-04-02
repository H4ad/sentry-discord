//#region Imports

import { HttpService, Injectable, Logger, UnauthorizedException } from '@nestjs/common';

import { DiscordPayload } from '../../../models/discord';
import { SentryPayload } from '../../../models/sentry';
import { EnvService } from '../../env/services/env.service';

//#endregion

/**
 * A classe que representa o serviço que lida com o Discord
 */
@Injectable()
export class DiscordService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly http: HttpService,
    private readonly env: EnvService,
  ) { }

  //#endregion

  //#region Private Properties

  /**
   * A instância para o serviço que realiza os logs
   */
  private readonly logger: Logger = new Logger(DiscordService.name);

  //#endregion

  //#region Public Methods

  /**
   * Método que alerta o Discord
   *
   * @param apiKey A chave da api enviada
   * @param sentryPayload As informações enviadas pela Sentry
   */
  public async alert(apiKey: string, sentryPayload: SentryPayload): Promise<void> {
    if (this.env.API_KEY !== apiKey)
      throw new UnauthorizedException('The API Key received is invalid.');

    const payload = this.getDiscordPayloadFromSentryPayload(sentryPayload);

    await this.http.post(this.env.DISCORD_WEBHOOK_URL, payload)
      .toPromise()
      .then(() => ({ error: false }))
      .catch(exception => {
        this.logger.error(exception);

        return { error: true };
      });
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que retorna o payload que será enviado para o Discord
   *
   * @param sentryPayload As informações de payload do Sentry
   */
  private getDiscordPayloadFromSentryPayload(sentryPayload: SentryPayload): DiscordPayload {
    return {
      username: 'SentryBot',
      // eslint-disable-next-line @typescript-eslint/camelcase
      avatar_url: this.env.DISCORD_SENTRY_BOT_IMAGE,
      content: `Alert! New issue for ${ sentryPayload.project_name }.`,
      embeds: [
        {
          author: {
            name: sentryPayload?.event?.user?.name || 'Anonymous',
            url: sentryPayload.url,
            // eslint-disable-next-line @typescript-eslint/camelcase
            icon_url: this.env.DISCORD_SENTRY_BOT_IMAGE,
          },
          title: sentryPayload.message,
          url: sentryPayload.url,
          description: sentryPayload.culprit,
          color: 15258703,
          fields: [
            {
              name: 'Level',
              value: sentryPayload.level,
              inline: true,
            },
            {
              name: 'Environment',
              value: sentryPayload.event?.environment || 'unknown',
              inline: true,
            },
          ],
          thumbnail: {
            url: this.env.DISCORD_SENTRY_BOT_IMAGE,
          },
          footer: {
            text: `Event received on: ${ new Date(sentryPayload.event.timestamp * 1000).toISOString() }.`,
            // eslint-disable-next-line @typescript-eslint/camelcase
            icon_url: this.env.DISCORD_SENTRY_BOT_IMAGE,
          },
        },
      ],
    };
  }

  //#endregion

}
