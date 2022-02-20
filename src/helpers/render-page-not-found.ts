import type { TemplateResult } from 'lit';
import { html } from 'lit';

// TODO: Review this issue https://github.com/vaadin/vaadin-router/issues/408

export const renderPageNotFound = (): TemplateResult => {
  import('../pages/page-not-found.js');

  return html`<page-not-found></page-not-found>`;
};
