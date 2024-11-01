import { formatUrl } from '../string';

interface RequestConfig<B = any> {
  body?: B;
  params?: Record<string, any>;
  override?: Omit<RequestInit, 'body' | 'method'>;
}

export abstract class Http {
  private readonly _url: string;
  private readonly _config: RequestInit;

  protected constructor(url: string, config: RequestInit) {
    this._url = url;
    this._config = config;
  }

  get url(): string {
    return this._url;
  }

  get config(): RequestInit {
    return this._config;
  }

  get<T>(
    path: string,
    config: Omit<RequestConfig, 'body'> = { params: {}, override: {} },
  ): Promise<T> {
    const { params, override } = config;

    const url = formatUrl(this.url, path, params);

    return this.send<T>(url, { ...override, method: 'GET' });
  }

  post<B, T = any>(
    path: string,
    config: RequestConfig<B> = { params: {}, override: {}, body: {} as B },
  ): Promise<T> {
    const { body, params, override } = config;

    const url = formatUrl(this.url, path, params);

    const isFormData = body instanceof FormData;

    return this.send(url, {
      ...override,
      method: 'POST',
      body: isFormData ? body : JSON.stringify(body),
    });
  }

  private async send<T>(
    url: string,
    { body, method, headers }: RequestInit,
  ): Promise<T> {
    const config = {
      ...this.config,
      ...(headers ? { headers } : this.config.headers),
      method,
      body,
    };

    return fetch(url, config as any)
      .then((response) => this.handle(response as unknown as Response))
      .then((handle) => handle && handle.response)
      .catch((error) => {
        throw error;
      });
  }

  private async handle(response: Response) {
    const status = response.status;
    const success = response.ok;

    let json: any;

    try {
      json = await response.json();
    } catch (error) {
      json = undefined;
    }

    const data = { status, response: json };

    if (!success) {
      throw data;
    }

    return data;
  }
}
