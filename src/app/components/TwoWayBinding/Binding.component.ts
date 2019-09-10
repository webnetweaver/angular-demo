import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: "two-way-binding-example",
    template: `
        <div class="binding-example">
            <div><b>Try typing in both input boxes.</b></div><br/>
            <input value="" #parentbind type="text" (keyup)=0 />
            <h2>&#8597;</h2>
            <input [value]="parentbind.value" (keyup)="parentbind.value = $event.target.value" >
        </div>
    `,
    styleUrls: ['./binding.css']
})
export class TwoWayBindingExampleComponent{}


@Component({
    selector: "two-way-binding-child",
    template: `<div>
                <b>Child</b>
               </div><br/>
               <input [value]="examplevalue" (keyup)="updateValue($event.target.value)" >`
})
export class TwoWayBindingChildComponent{

    @Input() examplevalue: string;
    @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(){this.examplevalue = ""};

    updateValue(newValue: string){
        this.onChange.emit(newValue);
    }
}

@Component({
    selector: "two-way-binding-parent",
    template: `
        <div class="binding-example">
            <div><b>Parent</b></div><br/>
            <input value="" #parentbind type="text" (keyup)=0 />
            <h2>&#8597;</h2>
            <two-way-binding-child [examplevalue]="parentbind.value" (onChange)="parentbind.value = $event" ></two-way-binding-child>
        </div>
    `,
    styleUrls: ['./binding.css']
})
export class TwoWayBindingParentComponent{}



@Component({
    template: `
        <h3>Demonstration of two-way binding using a template reference to create a feedback loop.  No form controls or component class code is used.</h3>
        <div class="example-continer">
            <two-way-binding-example></two-way-binding-example>
            <br/><br/>
        </div>
        <br/><br/>
        <h3>Demonstration of two-way binding through parent child hierarchy.  No form controls are used.</h3>
        <div class="example-continer">
            <two-way-binding-parent></two-way-binding-parent>
            <br/><br/>
        </div>
    `
})
export class TwoWayBindingComponent{}