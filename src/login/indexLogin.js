// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement } from 'lit-element';
import css_login from './login.scss';

class IndexLogin extends LitElement {
  static get styles() {
    return css_login;
  }
  render() {
    return html`
          <div class="container">
            <div class="stars"></div>
            <div class="stars2"></div>
            <div class="stars3"></div>
            <div class="center">
                <div class="firstContainer">
                  <img src="/src/svgs/security.svg" alt="Security person">
                </div>
                <div class="secondContainer">

                </div>
            </div>
          </div>
        `
  }
}

customElements.define('index-login', IndexLogin);
