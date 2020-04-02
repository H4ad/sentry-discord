//#region Imports

import { BadRequestException, Body, ClassSerializerInterceptor, Controller, HttpCode, HttpStatus, Post, Query, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNoContentResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { SentryPayload } from '../../../models/sentry';
import { DiscordService } from '../services/discord.service';

//#endregion

/**
 * A classe que representa o construtor que lida com o Discord
 */
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('discord')
@Controller('discord')
export class DiscordController {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly service: DiscordService,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que alerta o Discord
   *
   * @param apiKey A chave da api enviada
   * @param sentryPayload As informações enviadas pela Sentry
   */
  @ApiOperation({ summary: 'Send alert to Discord' })
  @ApiUnauthorizedResponse({ type: UnauthorizedException, description: 'The API Key send is invalid.' })
  @ApiNoContentResponse({ type: void 0, description: 'The alert was send successfully.' })
  @ApiBadRequestResponse({ type: BadRequestException, description: 'An error occur during send the alert. ' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post()
  public async alert(@Query('apiKey') apiKey: string, @Body() sentryPayload: SentryPayload): Promise<void> {
    return void await this.service.alert(apiKey, sentryPayload);
  }

  //#endregion

}
