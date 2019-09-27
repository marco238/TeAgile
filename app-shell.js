import { LitElement, html, css } from 'lit-element';

import { initRouter } from './router';

import './header/commonHeader';

class AppShell extends LitElement {
  static get styles() {
    return css`
      main {
        margin-top: 30px;
      }
    `;
  }

  static get properties() {
    return {
      appTitle: { type: String }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <common-heaer></common-heaer>

      <main></main>
    `;
  }

  updated(changedProps) {
    initRouter(this.shadowRoot.querySelector('main'));
  }
}

window.customElements.define('app-shell', AppShell);