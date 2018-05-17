import { Injectable } from '@angular/core';
import { ResourceService } from '../services/resource.service';

@Injectable()
export class UserService extends ResourceService {

    /**
     * URI to endpoint
     *
     * @type {string}
     */
    public endpoint = 'users';

    public getByEmail(email: string) {
        return this.get(null, '/byEmail/' + email);
    }
}
