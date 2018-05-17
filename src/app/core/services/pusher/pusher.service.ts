import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

declare const Pusher: any;

@Injectable()
export class PusherService {
    pusher: any;
    channel: any;
    public userEmail;

    constructor() {
        this.pusher    = new Pusher(environment.pusher.key, {
            cluster: environment.pusher.cluster,
            encrypted: true
        });
        this.userEmail = localStorage.getItem('currentUser');
        console.log('subscribed to ' + this.userEmail);
        this.channel = this.pusher.subscribe(this.userEmail);
    }
}
