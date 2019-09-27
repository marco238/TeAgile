import { LitElement, html, css } from 'lit-element';

import { initRouter } from './router';

import './header/commonHeader';

class AppShell extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      hideHeader: { type: Boolean },
      path: { type: String }
    };
  }

  constructor() {
    super();
    this.path = window.location.pathname.split('/')[1];
    this.hideHeader = this.path === 'login' || this.path === 'signup';
    if(!sessionStorage.getItem('user') && !this.hideHeader) {
      window.location.href = '/login';
    }
    
  }

  render() {
    return html`
      ${ this.hideHeader ? '' : html`<common-header></common-header>` }

      <main></main>
    `;
  }

  updated(changedProps) {
    initRouter(this.shadowRoot.querySelector('main'));
  }
}

window.customElements.define('app-shell', AppShell);