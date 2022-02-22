import type { RouterLocation } from '@vaadin/router';
import type { PropertyValues } from 'lit';
import { state } from 'lit/decorators.js';

import config from '../config.js';
import MetaOptions from '../types/meta-options.js';
import BaseElement from '../utils/base-element.js';
import { updateMeta } from './html-meta-manager/index.js';

export class PageElement extends BaseElement {
  @state()
  protected location?: RouterLocation;

  private defaultTitleTemplate = `%s | ${config.appName}`;

  protected get defaultMeta(): { url: string; titleTemplate: string } {
    return {
      url: window.location.href,
      titleTemplate: this.defaultTitleTemplate,
    };
  }

  /**
   * The page must override this method to customize the meta
   */
  protected meta(): MetaOptions | undefined {
    return;
  }

  protected updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    const meta = this.meta();

    if (meta) {
      updateMeta({
        ...this.defaultMeta,
        ...((meta.titleTemplate || meta.titleTemplate === null) && {
          titleTemplate: meta.titleTemplate,
        }),
        ...meta,
      });
    }
  }
}
