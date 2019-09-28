// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import { getDaysOfMonth, getCurrentDay } from './aux';
import './calendar-item';

class ComponentCalendar extends LitElement {
    constructor() {
        super();
        this.days = getDaysOfMonth();
        this.today = new Date();

        this.currentDay = getCurrentDay();
    }

    static get styles() {
        return css`
            .container {
                margin: 0%;
                overflow-x: auto;
                display: flex;
                align-items: center;
                white-space: nowrap;
                height: 100px;
            }
            .container .shadowLeft,.container .shadowRight  { 

                position: absolute;
                width: 1px;
                display: block;
                height: 50px;
                box-shadow: 0 0 10px;
            }
            .container .shadowLeft {
                left: -1px;
                
            }
            .container .shadowRight {
                right: -1px;
                
            }
        `;
    }

    _moveItem({ detail }) {
        const widthContainer = this.shadowRoot.querySelector('.container').clientWidth;
        const widthItem = detail.width;
        const positionYItem = detail.positionY;
        const offset = positionYItem - ((widthContainer - widthItem) / 2);
        this.shadowRoot.querySelector('.container').scrollLeft = offset;
    }

    _lastItemRender() {
        const index = this.days.findIndex(day => day.number === this.currentDay);
        this.days[index] = {
            ...this.days[index],
            current: true,
        }
        this.requestUpdate();
    }

    _renderItems(day, index) {
        return html`<calendar-item
                @moveItem=${this._moveItem}
                @lastItemRender=${this._lastItemRender}
                number=${day.number}
                month=${day.month}
                year=${day.year}
                nameOfDay=${day.nameOfDay}
                current=${day.current || false}
                isLastItem=${(index + 1) === this.currentDay}
                active=${day.active || false}
            >
            </calendar-item>`;
    }

    render() {
        return html`
          <div class="container">
            <div class="shadowLeft"></div>
            ${this.days.map((day, index) => this._renderItems(day, index))}
            <div class="shadowRight"></div>
          </div>
        `
    }
}

customElements.define('component-calendar', ComponentCalendar);
