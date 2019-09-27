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

  render() {
    return html`
      <div class="common-header">
        <div class="app-logo">
          <img src="/src/imgs/TeAgile.png" alt="TeAgile Logo">
          <p><span>Te</span><span>Agile</span></p>
        </div>
        <img src="/src/svgs/menu_logo.svg" alt="Menu Logo">
      </div>
    `;
  }
}

customElements.define('common-header', CommonHeader);
