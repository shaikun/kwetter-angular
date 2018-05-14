import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

    public isLoading = false;

    constructor() {

    }

    public start() {

        this.isLoading = true;

    }

    public stop() {

        this.isLoading = false;

    }

}
