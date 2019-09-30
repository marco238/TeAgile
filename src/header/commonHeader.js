import { html, LitElement } from 'lit-element';
import css_common_header from './commonHeader.scss';

class CommonHeader extends LitElement {
  static get styles() {
    return css_common_header;
  }
  
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  _openMenu() {
    this.dispatchEvent(new CustomEvent('open-menu', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="common-header">
        <div class="app-logo">
          <p><span>Te</span><span>Agile</span></p>
        </div>
        <img @click=${this._openMenu} src="/src/svgs/menu_logo.svg" alt="Menu Logo">
      </div>
    `;
  }
}

customElements.define('common-header', CommonHeader);
