import { html, LitElement, css } from 'lit-element';

class HomeElement extends LitElement {

  static get properties() {
    return {};
  }
  static get styles() {
    return css``;
  }

  render() {
    return html`
      <div class="home-container">
        <p>home</p>
      </div>
        `;
  }
}

customElements.define('home-element', HomeElement);
