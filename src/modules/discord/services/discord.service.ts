//#region Imports

import { HttpService, Injectable, Logger, UnauthorizedException } from '@nestjs/common';

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
      throw new UnauthorizedException('A chave de API enviada é invalida.');

    this.logger.log(sentryPayload);
    this.logger.log(JSON.stringify(sentryPayload, null, 2));
  }

  //#endregion

}
