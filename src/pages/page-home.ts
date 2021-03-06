import type { TemplateResult } from 'lit';
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import config from '../config.js';
import { PageElement } from '../helpers/page-element.js';
import styleSheet from '../stylesheets/stylesheets.js';
import MetaOptions from '../types/meta-options.js';

@customElement('page-home')
export class PageHome extends PageElement {
  public static styles = [
    styleSheet,
    css`
      section {
        padding: 1rem;
      }
    `,
  ];

  protected override render(): TemplateResult {
    return html`
      <section>
        <h1>Home</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          delectus? Unde, sit. Fuga modi ea praesentium. Nemo dicta qui, magnam
          cum dolorum excepturi beatae explicabo quidem fugiat ullam blanditiis
          minima!
        </p>

        <p>Here you can see <a href="/error">the not found page</a>.</p>
      </section>
    `;
  }

  public meta(): MetaOptions {
    return {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription,
    };
  }
}
