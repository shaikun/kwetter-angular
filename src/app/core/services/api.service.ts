import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
 Generated class for the ApiService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export abstract class ApiService {

    public endpoint;
    protected headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    /**
     * Constructor
     *
     * @param http
     */
    constructor(private http: HttpClient) {
    }

    /**
     * General request method
     *
     * @param method
     * @param body
     * @param uri
     */
    public request(method: string, body: any = {}, uri = null) {
        return this.http.request(method,
            this.getUrl(uri), {
                body: body,
                headers: this.headers
            });
    }

    /**
     * GET method
     *
     * @param uri
     * @param body
     * @returns {Observable<R>}
     */
    public get(body: any = {}, uri = null) {
        return this.request('GET', body, uri);
    }

    /**
     * POST method
     *
     * @param body
     * @param uri
     * @returns {Observable<R>}
     */
    public post(body: any = {}, uri = null) {
        return this.request('POST', body, uri);
    }

    /**
     * PUT method
     *
     * @param body
     * @param uri
     * @returns {Observable<R>}
     */
    public put(body: any = {}, uri = null) {
        return this.request('PUT', body, uri);
    }

    /**
     * PATCH method
     *
     * @param body
     * @param uri
     * @returns {Observable<R>}
     */
    public patch(body: any = {}, uri = null) {
        return this.request('PATCH', body, uri);
    }

    /**
     * DELETE method
     *
     * @param body
     * @param uri
     * @returns {Observable<any>}
     */
    public delete(body: any = {}, uri = null) {
        return this.request('DELETE', body, uri);
    }

    /**
     * Generate complete api url
     *
     * @returns {string}
     */
    public getUrl(uri: String) {

        let url = environment.apiUrl + this.endpoint;
        if (uri) {
            url += uri;
        }

        console.log('Url = ' + url);

        return url;

    }

}
