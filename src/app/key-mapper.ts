import { KeyBinderCore } from "./key-binder-core";


/**
 * This interface provides the method definitions for the KeyBinderCore class
 *
 * @export
 * @interface KeyMapper
 */
export interface KeyMapper {
  bind(data: KeyMapperData): KeyBinderCore;
  unbind(data: KeyMapperData): KeyBinderCore;
  unbindAll(): void;
}


/**
 * This interface provides the structure for individual key mapping
 *
 * @export
 * @interface KeyMapperData
 */
export interface KeyMapperData {
  source: string;
  key: string;
  type: string;
  listener: any;
  options?: object;
  description?: string;
}


/**
 * This interface provides the structure for individual key mapping which are to be removed
 *
 * @export
 * @interface KeyRemoverData
 */
export interface KeyRemoverData {
  key: string;
  source: string;
}
