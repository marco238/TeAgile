// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';

class CardItem extends LitElement {
    static get properties() {
        return {
            description: String,
            title: String,
            hour: String,
        }
    }
    constructor() {
        super();
    }

    static get styles() {
        return css`
            .containerCard {
                background: white;
                border-radius: 10px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                text-align: justify;
                overflow: hidden;
                padding: 0 10px;
                margin-bottom: 10px;
            }
            .hourLeft {
                height: 70px;
                min-width: 70px;
                line-height: 70px;
                text-align: center;
                border-radius: 10px;
                color: white;
                background: linear-gradient(to right top, #00ffed, #00ede1, #00dbd5, #00c9c8, #00b8ba);
            }
            .content {
                margin-left: 20px;
                font-size: 12px;
            }

            .content .description {
                text-overflow: ellipsis;
                max-height: 32px;
                line-height: 16px;
                font-size: 10px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

        `;
    }

    render() {
        return html`
          <div class="containerCard">
            <p class="hourLeft">${this.hour}</p>
            <div class="content">
                <p class="title">${this.title}</p>
                <p class="description">${this.description}</p>
            </div>
          </div>
        `
    }
}

customElements.define('card-item', CardItem);
