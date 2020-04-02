//#region Imports

import * as envalid from 'envalid';
import { CleanEnv, ValidatorSpec } from 'envalid';

import { implementOptionalInterface } from '../../../utils/interface';
import { IDotEnv } from '../models/dotenv';

//#endregion

/**
 * A classe que representa o serviço que guarda as configurações do ambiente
 */
export class EnvService extends implementOptionalInterface<Partial<Readonly<IDotEnv>> & CleanEnv>() {

  //#region Constructor

  /**
   * Construtor padrão
   *
   * @param dotEnvName O nome do arquivo que contém as configurações, normalmente sendo .env
   */
  constructor(
    dotEnvName: string = '.env',
  ) {
    super();

    Object.assign(this, this.validate(dotEnvName));
  }

  //#endregion

  //#region Public Properties

  /**
   * Diz se está no ambiente de testes
   */
  get isTest(): boolean {
    return this.NODE_ENV === 'test';
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que realiza a validação das variaveis de ambiente
   *
   * @param dotEnvName O nome do arquivo que contém as configurações, normalmente sendo .env
   */
  private validate(dotEnvName: string): IDotEnv {
    type DotEnvValidation = { [key in keyof IDotEnv]: ValidatorSpec<any> };

    const rule: DotEnvValidation = {
      NODE_ENV: envalid.str(),
      API_BASE_PATH: envalid.str({ default: 'prod', devDefault: 'dev' }),
      PORT: envalid.port({ default: 3000 }),
      SWAGGER_DESCRIPTION: envalid.str({ default: 'Base API' }),
      SWAGGER_TAG: envalid.str({ default: 'Base' }),
      SWAGGER_TITLE: envalid.str({ default: 'Base' }),
      SWAGGER_VERSION: envalid.str({ default: '1.0' }),
      SWAGGER_ENABLED: envalid.bool({ default: false }),
      DISCORD_WEBHOOK_URL: envalid.url({ default: 'http://127.0.0.1' }),
      DISCORD_SENTRY_BOT_IMAGE: envalid.url({ default: 'https://i.imgur.com/xJ0dMBZ.jpg' }),
      API_KEY: envalid.str({ default: '' }),
    };

    return envalid.cleanEnv<IDotEnv>(process.env, rule, { dotEnvPath: dotEnvName, strict: true });
  }

  //#endregion

}
