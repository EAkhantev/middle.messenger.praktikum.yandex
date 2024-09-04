interface RequestOptionsCRUD {
  headers?: { [key: string]: string };
  data?: FormData;
}

interface RequestOptions extends RequestOptionsCRUD {
  method: string;
}

export default class HttpClient {
  static METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };

  get = (url: string, options: RequestOptionsCRUD) => {
    return this.request(url, { ...options, method: HttpClient.METHODS.GET });
  };

  post = (url: string, options: RequestOptionsCRUD) => {
    return this.request(url, { ...options, method: HttpClient.METHODS.POST });
  };

  put = (url: string, options: RequestOptionsCRUD) => {
    return this.request(url, { ...options, method: HttpClient.METHODS.PUT });
  };

  delete = (url: string, options: RequestOptionsCRUD) => {
    return this.request(url, { ...options, method: HttpClient.METHODS.DELETE });
  };

  request = (url: string, options: RequestOptions, timeout: number = 5000) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (options.method === HttpClient.METHODS.GET && options.data) {
        url += `?${this.queryStringify(options.data)}`;
      }

      xhr.open(options.method, url, true);

      if (options.headers) {
        const headers = options.headers ?? {};
        Object.keys(options.headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.timeout = timeout;
      xhr.onload = () => resolve(xhr);
      xhr.onabort = () => reject(xhr);
      xhr.ontimeout = () => reject(xhr);
      xhr.onerror = () => reject(xhr);

      if (options.method === HttpClient.METHODS.GET || !options.data) {
        xhr.send();
      } else {
        xhr.send(options.data as FormData);
      }
    });
  };

  queryStringify(data: FormData) {
    const queryParams = [];

    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          queryParams.push(`${key}=${value.join(',')}`);
        } else {
          queryParams.push(`${key}=[object Object]`);
        }
      } else {
        queryParams.push(`${key}=${value}`);
      }
    }

    return `?${queryParams.join('&')}`;
  }
}
