import { Injectable } from '@angular/core';
import { KeyBinderCore } from './key-binder-core';
import { KeyMapperData } from './key-mapper';

@Injectable({
  providedIn: 'root'
})
export class KeyBinderService extends KeyBinderCore {
  constructor() {
    super();
  }

  setKeyEventListner(source: string, type: string, key: string, listener: Function, options: object = {}, description: string = ''): KeyBinderService {
    this.bind({ source, type, key, listener, options, description } as KeyMapperData)
    return this;
  }

  setKeyEventListnerMap(data: Array<KeyMapperData>): KeyBinderService {
    data.forEach((element: KeyMapperData) => {
      this.setKeyEventListner(element.source, element.type, element.key, element.listener, element.options, element.description)
    });
    return this;
  }

  destroyKeyEventListener(key: string, source: string): KeyBinderService {
    this.unbind({ key, source });
    return this;
  }

  destroyAllEventLisnteners() {
    this.unbindAll();
  }

  getAllShortcuts(): object {
    return this.getAll()
  }

}
