import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KweetService } from '../../kweet.service';
import { UserService } from '../../../user/user.service';
import { PusherService } from '../../../services/pusher/pusher.service';
import { Kweet } from '../../kweet';
import { User } from '../../../user/user';

@Component({
    selector: 'app-kweet-list',
    templateUrl: './kweet-list.component.html',
    styleUrls: ['./kweet-list.component.css']
})
export class KweetListComponent implements OnInit {

    public user: User;
    public kweetText: string;
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
                this.kweet.user = res;
                this.kweets.unshift(this.kweet);
            });
        });

        this.userService.getByEmail(localStorage.getItem('currentUser')).subscribe((res) => {
            this.user = res;
            console.log(this.user);
            this.getKweets();
        });
    }

    getKweets() {
        this.userService.allCustom(this.user.id, '/kweets').subscribe((res) => {
            this.kweets = res;
            console.log(this.kweets);
        });
    }

    createKweet() {
        this.kweetService.create({user_id: this.user.id, text: this.kweetText}).subscribe((data) => {

            this.kweet      = new Kweet();
            this.kweet.text = data['text'];
            this.kweet.date = data['date'];
            this.userService.one(data['user']['id']).subscribe((res) => {
                this.kweet.user = res;
                this.kweets.unshift(this.kweet);
            });
            console.log(data);
        });
    }

}
