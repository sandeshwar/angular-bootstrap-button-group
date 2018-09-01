#  Reusable [Bootstrap](https://getbootstrap.com/) Button Group Component using [Angular](http://angular.io/)

This is a reusable button group component based on Bootstrap's button group. You can use it in your Angular 6+ apps. It uses Bootstrap css classes so make sure you have referenced Bootstrap CSS file. 


## Installation
Install `button-group` via:
```shell
npm install --save @sandeshwar/button-group
```

## Usage

Once installed you need to import it in your module:
```js
import { ButtonGroupModule } from '@sandeshwar/button-group';

@NgModule({
  ...
  imports: [ButtonGroupModule, ...],
  ...
})
export class MyModule {
}
```

Here's a sample component
```js
import { Button } from '@sandeshwar/button-group';

@Component({
  ...
})
export class MyComponent implements OnInit {
  buttons: Button[];
  selectedButton = '';
  
  // if true, buttons will be stacked vertically
  vertical = false;
  
  // if true, button group will take up the entire width of it's parent element
  // works only in Bootstrap 3
  justified = false;

  // size of the button (sm, md, lg)
  // default is md
  size = 'sm';
  
  // disables all the buttons
  disabled = false;

  ngOnInit() {
    // Create as many buttons as you need
    this.buttons = [
      { label: 'Save', value: 'save' },
      { label: 'New', value: 'new' },
      { label: 'Delete', value: 'delete' }
    ];

    // You can subscribe to value changes using ViewChild
    this.buttonGroup.selectedButtonChange.subscribe(
      buttonValue => console.log(buttonValue)
    );
  }

  // You can also listen to changes using Output binding in template
  change(e) {
    console.log(e);
  }
}
```

Include the following in your template
```html
<nbbg-button-group [buttons]="buttons" [vertical]="vertical" [justified]="justified" [size]="size" 
                   [disabled]="disabled" [(ngModel)]="selectedButton"
                   (selectedButtonChange)="change($event)"></nbbg-button-group>

{{ selectedButton }}
```

## More details
vertical, justified, size and disabled are optional properties.

Please import `FormsModule` if you haven't already as it is required for the `ngModel` property
