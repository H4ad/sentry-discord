/**
 * A interface que representa as configurações necessárias do
 */
export interface IDotEnv {

  //#region Environment

  /**
   * O tipo de ambiente que está rodando a aplicação
   */
  NODE_ENV: string;

  //#endregion

  //#region API

  /**
   * A estratégia padrão de autenticação
   */
  API_DEFAULT_STRATEGY: string;

  /**
   * O url base para acessar a API.
   * Eu recomendo usar subdominios, e manter o base como ''.
   */
  API_BASE_PATH: string;

  /**
   * O número da porta que será executado a API
   */
  PORT: number;

  //#endregion

  //#region Swagger

  /**
   * O titulo que será usado para a API.
   * Normalmente colocado o nome da empresa que contratou o serviço
   */
  SWAGGER_TITLE: string;

  /**
   * Uma breve descrição da API
   */
  SWAGGER_DESCRIPTION: string;

  /**
   * A versão atual da API
   */
  SWAGGER_VERSION: string;

  /**
   * Uma simples tag para o Swagger, pode ser o mesmo do titulo
   */
  SWAGGER_TAG: string;

  /**
   * Diz se o Swagger está ativado
   */
  SWAGGER_ENABLED: boolean;

  //#endregion

  //#region Discord

  /**
   * O url do Webhook do Discord
   */
  DISCORD_WEBHOOK_URL: string;

  /**
   * O url da imagem do bot
   */
  DISCORD_SENTRY_BOT_IMAGE: string;

  //#endregion

  //#region API Key

  /**
   * A chave para a API, usado para autenticar a requisição
   */
  API_KEY: string;

  //#endregion

}
