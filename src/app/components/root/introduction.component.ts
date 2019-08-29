import {Component} from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Component({
    template:`
    <h3>Welcome to Sean's Angular Demo App!</h3>
    <p>
        Here's some more content as well!
    </p>
    `
})
export class IntroductionComponent{

    response: any;

    constructor(private client: HttpClient){
        this.client.get("http://localhost:4200/assets/data.json").subscribe(data => this.response = data);
    }

}