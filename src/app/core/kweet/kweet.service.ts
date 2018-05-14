import { Injectable } from '@angular/core';
import { ResourceService } from '../services/resource.service';

@Injectable()
export class KweetService extends ResourceService {

    /**
     * URI to endpoint
     *
     * @type {string}
     */
    public endpoint = 'kweets';
}
