import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
     * @param headers
     */
    public request(method: string, body: any = {}, uri = null, headers: HttpHeaders) {
        let requestHeader: HttpHeaders = headers;
        if (requestHeader == null) {
            requestHeader = this.headers;
        }

        return this.http.request(method,
            this.getUrl(uri), {
                body: body,
                headers: requestHeader
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
        return this.request('GET', body, uri, null);
    }

    /**
     * POST method
     *
     * @param body
     * @param uri
     * @returns {Observable<R>}
     */
    public post(body: any = {}, uri = null) {
        body = this.convertToURLSearchParam(body);
        return this.request('POST', body, uri, new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'));
    }

    /**
     * PUT method
     *
     * @param body
     * @param uri
     * @returns {Observable<R>}
     */
    public put(body: any = {}, uri = null) {
        body = this.convertToURLSearchParam(body);
        return this.request('PUT', body, uri, new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'));
    }

    /**
     * PATCH method
     *
     * @param body
     * @param uri
     * @returns {Observable<R>}
     */
    public patch(body: any = {}, uri = null) {
        body = this.convertToURLSearchParam(body);
        return this.request('PATCH', body, uri, new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'));
    }

    /**
     * DELETE method
     *
     * @param body
     * @param uri
     * @returns {Observable<any>}
     */
    public delete(body: any = {}, uri = null) {
        body = this.convertToURLSearchParam(body);
        return this.request('DELETE', body, uri, new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'));
    }

    /**
     * Generate complete api url
     *
     * @returns {string}
     */
    public getUrl(uri: string) {

        let url = environment.apiUrl + this.endpoint;
        if (uri) {
            url += uri;
        }

        console.log('Url = ' + url);

        return url;

    }

    // TODO: Remove convert JSON BODY to SearchParams when JAVA EE accepts JSON in PATH REQUEST.
    private convertToURLSearchParam(body: string): string {
        if (body == null || body === '') {
            return '';
        }
        const params = new URLSearchParams();
        Object.keys(body).map(key => {
            params.set(key, body[key]);
        });
        return params.toString();
    }

}
