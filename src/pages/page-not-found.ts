import type { TemplateResult } from 'lit';
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import {
  PageElementNotFound,
  pageNotFoundMeta,
} from '../helpers/page-element-not-found.js';
import { urlForName } from '../router/index.js';
import styleSheet from '../stylesheets/stylesheets.js';
import MetaOptions from '../types/meta-options.js';

@customElement('page-not-found')
export class PageNotFound extends PageElementNotFound {
  public static styles = [
    styleSheet,
    css`
      :host {
        display: block;
      }

      section {
        padding: 1rem;
        text-align: center;
      }
    `,
  ];

  protected override render(): TemplateResult {
    return html`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="${urlForName('home')}">Back to home</a>
        </p>
      </section>
    `;
  }

  public meta(): MetaOptions {
    return pageNotFoundMeta;
  }
}
