import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KweetService } from '../../kweet.service';
import { UserService } from '../../../user/user.service';
import { PusherService } from '../../../services/pusher/pusher.service';
import { Kweet } from '../../kweet';

@Component({
    selector: 'app-kweet-list',
    templateUrl: './kweet-list.component.html',
    styleUrls: ['./kweet-list.component.css']
})
export class KweetListComponent implements OnInit {

    public kweets;
    private kweet: Kweet;

    constructor(private router: Router,
                private kweetService: KweetService,
                private userService: UserService,
                private pusherService: PusherService) {
        // this.getKweets();
    }

    ngOnInit(): void {
        this.pusherService.channel.bind('newEvent', data => {
            console.log(data);
            console.log(data['text']);
            this.kweet      = new Kweet();
            this.kweet.text = data['text'];
            this.kweet.date = data['date'];
            this.userService.one(data['user_id']).subscribe((res) => {
                console.log(res);
                this.kweet.user = res['data'];
                this.kweets.unshift(this.kweet);
            });
        });

        this.getKweets();
    }

    getKweets() {
        this.userService.allCustom(1, '/kweets').subscribe((res) => {
            this.kweets = res['data'];
            console.log(this.kweets);
        });
    }

}
