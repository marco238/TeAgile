import { LitElement, html, css } from 'lit-element';

import { initRouter } from './router';

import './src/header/commonHeader';
import './src/menu/app-menu';

class AppShell extends LitElement {
  static get styles() {
    return css`
      .menu {
        position: absolute;
        top: 0;
        width: 100vw;
        transition: all 0.3s ease;
      }

      .hide {
        width: 0;
      }
    `;
  }

  static get properties() {
    return {
      hideHeader: { type: Boolean },
      path: { type: String },
      showMenu: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.path = window.location.pathname.split('/')[1];
    this.hideHeader = this.path === 'login' || this.path === 'signup';
    if(!sessionStorage.getItem('user') && !this.hideHeader) {
      window.location.href = '/login';
    }
    this.showMenu = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.addEventListener('close-menu', () => this._toogleMenu());
    this.shadowRoot.addEventListener('open-menu', () => this._toogleMenu());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.shadowRoot.removeEventListener('close-menu', () => this._toogleMenu());
    this.shadowRoot.removeEventListener('open-menu', () => this._toogleMenu());
  }

  _toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  render() {
    return html`
      ${ this.hideHeader ? '' : html`<common-header></common-header>` }
      
      <app-menu class="menu ${ this.showMenu ? '' : 'hide' }"></app-menu>

      <main></main>
    `;
  }

  firstUpdated() {
    initRouter(this.shadowRoot.querySelector('main'));
  }

  updated(changedProps) {
    if(changedProps.path) {
      initRouter(this.shadowRoot.querySelector('main'));
    }
  }
}

window.customElements.define('app-shell', AppShell);