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

  render() {
    return html`
      <div class="menu-container">
        <div class="content">
          <div class="links-column">
            <div class="link">
              <span>Profile</span>
              <button-generic
                action="close-menu"
                img="/src/svgs/user.svg"
                backgroundColor="linear-gradient(135deg, rgb(0, 255, 238), rgb(0, 183, 186)">
              </button-generic>
            </div>
            <div class="link">
              <span>Ritual</span>
              <button-generic
                action="close-menu"
                img="/src/svgs/done-all.svg"
                backgroundColor="linear-gradient(135deg, rgb(110, 227, 245), rgb(100, 84, 240)">
              </button-generic>
            </div>
            <div class="link">
              <span>Chat</span>
              <button-generic
                action="close-menu"
                img="/src/svgs/chat.svg"
                backgroundColor="linear-gradient(135deg, rgb(255, 164, 46), rgb(234, 76, 44)">
              </button-generic>
            </div>
            <div class="link">
              <span>Chat Bot</span>
              <button-generic
                action="close-menu"
                img="/src/svgs/android.svg"
                backgroundColor="linear-gradient(135deg, rgb(248, 105, 212), rgb(87, 80, 222)">
              </button-generic>
            </div>
            <div class="link">
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
