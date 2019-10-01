import { html, LitElement } from 'lit-element';
import css_menu from './menu.scss';

import '../button/button-generic';

class AppMenu extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css_menu;
  }

  _redirectHome() {
    this.dispatchEvent(new CustomEvent('close-menu', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="menu-container">
        <div class="content">
          <div class="links-column">
            <a href="/home" @click="${this._redirectHome}">
              <div class="link">
                <span>Home</span>
                <img class="home-link" src="/src/imgs/TeAgile.png" alt="App Logo">
                </button-generic>
              </div>
            </a>
            <div class="link">
              <span>Profile</span>
              <button-generic
                action="close-menu"
                img="/src/svgs/user.svg"
                backgroundColor="linear-gradient(135deg, rgb(0, 255, 238), rgb(0, 183, 186)">
              </button-generic>
            </div>
            <a href="/project">
              <div class="link">
                <span>Tasks</span>
                <button-generic
                  action="close-menu"
                  img="/src/svgs/done-all.svg"
                  backgroundColor="linear-gradient(135deg, rgb(110, 227, 245), rgb(100, 84, 240)">
                </button-generic>
              </div>
            </a>
            <a href="/chat">
              <div class="link">
                <span>Chat</span>
                <button-generic
                  action="close-menu"
                  img="/src/svgs/chat.svg"
                  backgroundColor="linear-gradient(135deg, rgb(255, 164, 46), rgb(234, 76, 44)">
                </button-generic>
              </div>
            </a>
            <a href="/chatbot">
              <div class="link">
                <span>Bot</span>
                <button-generic
                  action="close-menu"
                  img="/src/svgs/android.svg"
                  backgroundColor="linear-gradient(135deg, rgb(248, 105, 212), rgb(87, 80, 222)">
                </button-generic>
              </div>
            </a>
            <div class="link close-menu-link">
              <button-generic
                action="close-menu">
              </button-generic>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-menu', AppMenu);
