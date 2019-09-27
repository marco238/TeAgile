import { html, LitElement, css } from 'lit-element';
import css_home from './home.scss';

import '../button/button-generic';

class HomeElement extends LitElement {
  static get styles() {
    return css_home;
  }

  static get properties() {
    return {};
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connected');
    this.shadowRoot.addEventListener('createTask', this._createTask);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.shadowRoot.removeEventListener('createTask', this._createTask);
  }

  _createTask() {
    console.log('create task');
    window.location.href = '/create-project';
  }

  render() {
    return html`
      <div class="home-container">
        <button-generic
          backgroundColor="linear-gradient(135deg, rgba(255,166,46,1) 0%, rgba(241,111,92,1) 33%, rgba(246,41,12,1) 63%, rgba(240,47,23,1) 70%, rgba(234,77,44,1) 100%)"
          img="/src/svgs/add-24px.svg"
          action="createTask">
        </button-generic>
      </div>
        `;
  }
}

customElements.define('home-element', HomeElement);
