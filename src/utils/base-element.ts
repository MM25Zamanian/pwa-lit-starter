import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import config from '../config.js';
import logLevel from '../types/log-level.js';

export default abstract class BaseElement extends LitElement {
  @property({ type: Boolean, reflect: true })
  public debug = config.environment === 'development' ? true : false;

  private colors: Record<logLevel, string> = {
    log: '#3DC24A',
    info: '#248A9B',
    warn: '#F79B34',
    error: '#D84135',
  };

  protected log(message: unknown, ...restParam: unknown[]): void {
    this.__logger('log', message, ...restParam);
  }

  protected _log(message: unknown, ...restParam: unknown[]): void {
    if (this.debug) {
      this.log(message, ...restParam);
    }
  }

  protected _info(message: unknown, ...restParam: unknown[]): void {
    this.__logger('info', message, ...restParam);
  }

  protected _warn(message: unknown, ...restParam: unknown[]): void {
    this.__logger('warn', message, ...restParam);
  }

  protected _error(message: unknown, ...restParam: unknown[]): void {
    this.__logger('error', message, ...restParam);
  }

  protected _fire(eventName: string, detail: unknown, bubbles = false): void {
    this._log('fire %s {%o}', eventName, detail);
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles,
        composed: bubbles,
      })
    );
  }

  private __logger(
    logLevel: logLevel,
    message: unknown,
    ...restParam: unknown[]
  ): void {
    // first args must be separated as keyPattern for fix issue of `this._log('a=%s', a)`
    const tagName = (this.tagName + '').toLowerCase();
    console[logLevel](
      `%c<%s>%c ${message}`,
      `color: ${this.colors[logLevel]}; font-size: 1.2em;`,
      tagName,
      'color: inherit;font-size: 1em',
      ...restParam
    );
  }
}
