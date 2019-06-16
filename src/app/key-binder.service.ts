import { Injectable } from '@angular/core';
import { KeyBinderCore } from './key-binder-core';
import { KeyMapperData } from './key-mapper';

/**
 * This services provides an angular instance which interfaces with the @class KeyBinderCore class
 *
 * @export
 * @class KeyBinderService
 * @extends {KeyBinderCore}
 */
@Injectable({
  providedIn: 'root'
})
export class KeyBinderService extends KeyBinderCore {
  constructor() {
    super();
  }

  /**
   * This will set the key binding by the component
   *
   * @param {string} source The component from where it originates
   * @param {string} type The type of method
   * @param {string} key The key for the shortcut
   * @param {*} listener The callback on the key press
   * @param {object} [options={}] Options supported by EventListeners
   * @param {string} [description=''] Description for using it with other components
   * @returns {KeyBinderService}
   * @memberof KeyBinderService
   */
  setKeyEventListner(
    source: string, type: string, key: string, listener: any, options: object = {}, description: string = ''): KeyBinderService {
    this.bind({ source, type, key, listener, options, description } as KeyMapperData);
    return this;
  }


  /**
   * This will set the key binding by the component together as a set
   *
   * @param {Array<KeyMapperData>} data
   * @returns {KeyBinderService}
   * @memberof KeyBinderService
   */
  setKeyEventListnerMap(data: Array<KeyMapperData>): KeyBinderService {
    data.forEach((element: KeyMapperData) => {
      this.setKeyEventListner(element.source, element.type, element.key, element.listener, element.options, element.description);
    });
    return this;
  }

  /**
   * Removes a specific key binding
   *
   * @param {string} key
   * @param {string} source
   * @returns {KeyBinderService}
   * @memberof KeyBinderService
   */
  destroyKeyEventListener(key: string, source: string): KeyBinderService {
    this.unbind({ key, source });
    return this;
  }

  /**
   * Removes all key bindings
   *
   * @memberof KeyBinderService
   */
  destroyAllEventLisnteners() {
    this.unbindAll();
  }

  /**
   * Returns all the shortcuts in a custom objects
   * @json
   * component = {
   *   description, key, etc...
   * }
   *
   * @returns {object}
   * @memberof KeyBinderService
   */
  getAllShortcuts(): object {
    return this.getAll();
  }

}
