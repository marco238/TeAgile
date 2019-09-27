// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_button from './button.scss';

class ButtonGeneric extends LitElement {
    static get properties() {
        return {
            img: String,
            action: String,
            textAlternative: String,
            backgroundColor: String
        }
    }

  constructor() {
    super();
    this.backgroundColor = this.backgroundColor || '#f3f3f3';
    this.textAlternative = this.textAlternative || 'Cancelar';
    this.img = this.img || '/src/svgs/close-24px.svg';
  }

  static get styles() {
    return css_button;
  }

  dispatchAction() {
      if(this.action) {
          this.dispatchEvent(new CustomEvent(this.action));
        }
  }

  render() {
    return html`
          <button @click=${this.dispatchAction} style=${`background: ${this.backgroundColor}`}>
              <img src=${this.img} alt=${this.textAlternative}/>
          </button>
        `
  }
}

customElements.define('button-generic', ButtonGeneric);
