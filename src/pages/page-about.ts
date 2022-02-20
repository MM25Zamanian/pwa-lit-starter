import type { TemplateResult } from 'lit';
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PageElement } from '../helpers/page-element.js';
import styleSheet from '../stylesheets/stylesheets.js';
import MetaOptions from '../types/meta-options.js';

@customElement('page-about')
export class PageAbout extends PageElement {
  public static styles = [
    ...styleSheet,
    css`
      section {
        padding: 1rem;
      }
    `,
  ];

  protected override render(): TemplateResult {
    return html`
      <section>
        <h1>About</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>
      </section>
    `;
  }

  public override meta(): MetaOptions {
    return {
      title: 'About',
      description: 'About page description',
    };
  }
}
