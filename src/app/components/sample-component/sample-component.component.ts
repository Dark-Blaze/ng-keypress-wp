import { Component, OnInit } from '@angular/core';
import { KeyBinderService } from 'src/app/key-binder.service';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { KeyMapperData } from 'src/app/key-mapper';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

  action = 'No key pressed yet!';
  registeredKeys: Array<string> = ['v', 'a', 'b', 'd', 'e', 'g', 'm'];
  keyCallbackSample;
  keyMap: object = {};

  constructor(private keyboardMapper: KeyBinderService) {
    this.keyCallbackSample = this.callback.bind(this);
  }

  ngOnInit() {
    this.assign();
  }

  /**
   *
   * Component method callback
   * @param {*} data
   * @returns {boolean}
   * @memberof SampleComponentComponent
   */
  callback(data: any): boolean {
    // tslint:disable-next-line: max-line-length
    this.action = 'Pressed <span class="highlight">' + data['key'] + '</span> and propogated to <span class="code">keyCallbackSample()</span> method inside the <span class="code">SampleComponent</span>';
    return false;
  }

  /**
   *
   * Get all binding map
   * @memberof SampleComponentComponent
   */
  getKeys(): void {
    this.keyMap = this.keyboardMapper.getAllShortcuts();
  }


  /**
   * Destroy all key listeners
   *
   * @memberof SampleComponentComponent
   */
  reset(): void {
    this.keyboardMapper.destroyAllEventLisnteners();
    this.action = 'No key pressed yet!';
    this.registeredKeys = [];
    this.keyMap = {};
  }

  /**
   *
   * Setting multiple key listeners
   * @memberof SampleComponentComponent
   */
  assign(): void {
    this.keyboardMapper.setKeyEventListner('SampleComponentComponent', 'keydown', 'v', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'a', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'b', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'd', this.keyCallbackSample)
      .setKeyEventListner('SampleComponentComponent', 'keydown', 'e', this.keyCallbackSample);


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
      source: 'SampleComponentComponent',
      key: 'm',
      type: 'keydown',
      listener: this.keyCallbackSample,
      options: {},
      description: 'Some random stuff'
    }] as Array<KeyMapperData>);

    this.registeredKeys = ['v', 'a', 'b', 'd', 'e', 'g', 'm'];

  }
}
