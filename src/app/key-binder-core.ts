import { KeyMapper, KeyMapperData, KeyRemoverData } from './key-mapper';


export class KeyBinderCore implements KeyMapper {

  private state = [];

  /**
   * This method will help bind a new key as a shortcut.
   *
   * @param {KeyMapperData} data This will contain the data for mapping the key and it's listener
   * @returns {KeyBinderCore}
   * @memberof KeyBinderCore
   */
  bind(data: KeyMapperData): KeyBinderCore {
    this.state.push(data);
    return this;
  }

  unbind(data: KeyRemoverData): KeyBinderCore {
    this.state.splice(this.state.map((i: KeyMapperData) => {
      if (data.source === i.source)
        return i.key
    }).indexOf(data.key), 1);
    return this;
  }

  unbindAll(): void {
    this.state = [];
  }
}
