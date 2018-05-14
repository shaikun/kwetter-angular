import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

/*
 Generated class for the ResourceService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export abstract class ResourceService extends ApiService {

    /**
     * Get all instances of entity
     *
     * @returns {Observable<any>}
     */
    public all() {
        return this.get(null, '/all');
    }

    public allCustom(id: number, customParam: string) {
        return this.get(null, '/' + id + customParam);
    }

    /**
     * Get one instance of entity
     *
     * @param {number} id
     * @returns {Observable<any>}
     */
    public one(id: number) {
        return this.get(null, '/' + id);
    }

    /**
     * Create a instance of entity
     *
     * @param {Object} data
     * @returns {Observable<any>}
     */
    public create(data: any) {
        return this.post(data);
    }

    /**
     * Update a instance of entity
     *
     * @param {number} id
     * @param {Object} data
     * @returns {Observable<any>}
     */
    public update(id: number, data: any) {
        return this.patch(data);
    }

    /**
     * Remove a instance of entity
     *
     * @param {number} id
     * @returns {Observable<any>}
     */
    public remove(id: number) {
        return this.delete(null, '/' + id);
    }

}
