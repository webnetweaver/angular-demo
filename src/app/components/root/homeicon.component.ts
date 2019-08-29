import {Component} from "@angular/core";

@Component({
    selector: 'home-icon',
    template: `<div class="home-icon-container">
        <div class="home-icon">
            <img src="assets/images/home-2741413_640.png" style="width: 110px;height: 97px;" routerLink="/home">
        </div>  
    </div>`,
    styleUrls: ['./app.css']
})
export class HomeIconComponent{}