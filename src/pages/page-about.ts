import type { TemplateResult } from 'lit';
import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { PageElement } from '../helpers/page-element.js';

@customElement('page-about')
export class PageAbout extends PageElement {
  public static styles = css`
    section {
      padding: 1rem;
    }
  `;

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

  public override meta(): { title: string; description: string } {
    return {
      title: 'About',
      description: 'About page description',
    };
  }
}
