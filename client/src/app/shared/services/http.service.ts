import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Config } from '../../../config';

@Injectable()
export class HttpService {
  public static requestHandle = new Subject();
  private localStorage = window.localStorage;

  constructor(private http: Http) {}

  private getUrl(url: string = ''): string {
    return Config.getApiUrl() + url;
  }

  createAuthenticatedHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (this.localStorage.getItem('auth-token')) {
      headers.append('Authorization', this.localStorage.getItem('auth-token'));
    }
    return headers;
  }
  createHeaders() {
    const headers = new Headers();
    return headers;
  }

  createAuthenticatedRequest(url: string, options: RequestOptions) {
    options.headers.append('Content-Type', 'application/json');
    if (this.localStorage.getItem('auth-token')) {
      options.headers.append(
        'Authorization',
        this.localStorage.getItem('auth-token'),
      );
    }
    return this.http
      .request(this.getUrl(url), options)
      .map((response: Response) => {
        HttpService.requestHandle.next(response);
        return response.json();
      })
      .catch(this.errorHandler);
  }

  get(url: string) {
    const headers = this.createHeaders();
    return this.http
      .get(url, {
        headers: headers,
      })
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createPost(url: string, body: any) {
    const options = new RequestOptions({
      method: 'post',
      body: JSON.stringify(body),
      headers: new Headers(),
    });
    return this.createAuthenticatedRequest(url, options);
  }

  createPut(url: string, body: any) {
    const options = new RequestOptions({
      method: 'put',
      body: JSON.stringify(body),
      headers: new Headers(),
    });
    return this.createAuthenticatedRequest(url, options);
  }
  createGet(url: string) {
    const options = new RequestOptions({
      method: 'get',
      headers: new Headers(),
    });
    return this.createAuthenticatedRequest(url, options);
  }

  createGetQuery(url: string, params?: { [key: string]: string }) {
    const queryParams = new URLSearchParams();
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        queryParams.set(key, params[key]);
      }
    }
    const options = new RequestOptions({
      method: 'get',
      headers: new Headers(),
      search: queryParams,
    });
    options.headers.append('Cache-Control', 'no-cache');
    options.headers.append('Pragma', 'no-cache');
    return this.createAuthenticatedRequest(url, options);
  }

  createDelete(url: string) {
    const options = new RequestOptions({
      method: 'delete',
      headers: new Headers(),
    });
    return this.createAuthenticatedRequest(url, options);
  }

  private errorHandler(error: any) {
    console.log(error);
    HttpService.requestHandle.next(error);
    return Observable.throw(error);
  }
}
