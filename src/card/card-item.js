// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';

class CardItem extends LitElement {
    static get properties() {
        return {
            description: String,
            title: String,
            hour: String,
            color: String
        };
    }
    constructor() {
        super();
        this.color = 'linear-gradient(to right top, #00ffed, #00ede1, #00dbd5, #00c9c8, #00b8ba)';
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
                padding: 0 10px 0 5px;
                margin-bottom: 10px;
                margin-left: 10px;
                margin-right: 10px;
            }
            .hourLeft {
                height: 80px;
                min-width: 80px;
                line-height: 80px;
                text-align: center;
                border-radius: 5px;
                color: white;
                margin: 5px 0;
            }
            .content {
                margin-left: 10px;
                font-size: 16px;

            }
            .title{
                margin-top: 8px;
                margin-bottom: 5px;
            }

            .content .description {
                text-overflow: ellipsis;
                max-height: 32px;
                line-height: 16px;
                font-size: 10px;
                overflow: hidden;
                display: -webkit-box;
                margin-top: 0;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

        `;
    }

    render() {
        return html`
          <div class="containerCard">
            <p class="hourLeft" style="background: ${this.color}">${this.hour}</p>
            <div class="content">
                <p class="title">${this.title}</p>
                <p class="description">${this.description}</p>
            </div>
          </div>
        `
    }
}

customElements.define('card-item', CardItem);
