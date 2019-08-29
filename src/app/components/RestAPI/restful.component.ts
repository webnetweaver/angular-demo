import { Component} from '@angular/core'
import { HttpClient} from '@angular/common/http'

@Component({
    template: `
    <h3>This is a demonstration of retrieving data from a restful web service</h3>

    <section>
        Retrieved data: <br />
        {{response | json}}
    </section>
    `
})
export class RestExampleComponent{
    response: any;

    constructor(private client: HttpClient){
        this.client.get("http://localhost:4200/assets/data.json").subscribe(response => this.response = response);
    };
}