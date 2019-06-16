import { Component, OnInit } from '@angular/core';
import { KeyBinderService } from 'src/app/key-binder.service';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

  constructor(private keyboardMapper: KeyBinderService) { }

  ngOnInit() {
    //Setting multiple key listeners
    this.keyboardMapper.setKeyEventListner('SampleComponentComponent', 'keydown', 'v', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'a', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'b', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'd', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'e', this.keyCallbackSample)

    // Set key listeners via a map
    this.keyboardMapper.setKeyEventListnerMap([{
      source: 'SampleComponentComponent',
      key: 'g',
      type: 'keydown',
      listener: this.keyCallbackSample,
      options: {},
      description: 'Some random stuff'
    },
    {
      source: 'RandomComponent',
      key: 'm',
      type: 'keydown',
      listener: this.keyCallbackSample,
      options: {},
      description: 'Some random stuff'
    }]);


    // Get all binding map
    console.log(this.keyboardMapper.getAllShortcuts())

    //Destroy specific key listeners
    this.keyboardMapper.destroyKeyEventListener('b', 'SampleComponentComponent');

    //Destroy all key listeners
    this.keyboardMapper.destroyAllEventLisnteners();

  }

  // Component method callback
  keyCallbackSample(data: object): any {
    // To do

    return data;
  }
}
