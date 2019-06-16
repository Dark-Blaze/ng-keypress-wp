import { KeyMapper, KeyMapperData, KeyRemoverData } from './key-mapper';

/**
 * This is a core class for implementing and interfacing with any key binding library.
 *
 * @export
 * @class KeyBinderCore
 * @implements {KeyMapper}
 */
export class KeyBinderCore implements KeyMapper {

    /**
   * This will store the key binding properties
   *
   * @private
   * @memberof KeyBinderCore
   */
  private state:KeyMapperData[] = [] as Array<KeyMapperData>;

  /**
   * This method will bind a new key as a shortcut.
   *
   * @param {KeyMapperData} data This will contain the data for mapping the key and it's listener
   * @returns {KeyBinderCore}
   * @memberof KeyBinderCore
   */
  public bind(data: KeyMapperData): KeyBinderCore {
    this.state.push(data);
    return this;
  }

  /**
   * This method will unbind a new key as a shortcut
   *
   * @param {KeyRemoverData} data This will contain the data for mapping the key and it's listener
   * @returns {KeyBinderCore}
   * @memberof KeyBinderCore
   */
  public unbind(data: KeyRemoverData): KeyBinderCore {
    this.state.splice(this.state.map((i: KeyMapperData) => {
      if (data.source === i.source)
        return i.key
    }).indexOf(data.key), 1);

    return this;
  }

  /**
   * This method will remove all the key bindings
   *
   * @memberof KeyBinderCore
   */
  public unbindAll(): void {
    this.state = [];
  }

  /**
   * This method will return all the key maps
   *
   * @returns {object}
   * @memberof KeyBinderCore
   */
  public getAll(): object {
    const components = Array.from(new Set(this.state.map((i: KeyMapperData) => i.source)));
    let result = {};
    components.map((v, k) => {
      result[v] = this.state.filter(key => key.source === v);
    })
    return result;
  }
}
