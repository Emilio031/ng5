import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  // api位置
  baseUrl = '/Vote.api/api';
  token = null;
  headers = new Headers();
  loginStatus = false;

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  /*  假如你的api request為 https://www.googleapis.com/youtube/v3
        https://www.googleapis.com/ -> baseUrl
        youtube/v3 -> url 參數 (post時不一定有) */

  get<T>(url: string) {
    console.log('header', this.headers);
    return (<Observable<any>>this.http
      .get(`${this.baseUrl + url}`, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError)) as Observable<any>;
  }

  post<T>(url: string, body) {
    console.log('header', this.headers);
    return (<Observable<any>>this.http
      .post(`${this.baseUrl + url}`, body, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch(this.handleError)) as Observable<any>;
  }

  setToken(token: string) {
    this.headers.append('Token', token);
    console.log('token: ', this.token);
  }

  handleError(res: Response) {
    return Observable.throw(res);
  }

  setLoginStatus(status: boolean) {
    this.loginStatus = status;
    console.log('api: setLoginStatus- logout');
    status = false;
    if (status === false) {
      this.token = '';
    }
    console.log('token: ', this.token);
  }
}
