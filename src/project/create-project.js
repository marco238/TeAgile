// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_detail from '../card/detail.scss';
import css_new from '../card/newcard.scss';
import '../button/button-generic';
import '../spinner/spinner-loader';

class NewProject extends LitElement {
    static get properties() {
        return {
            loading: Boolean,
        }
    }
    constructor() {
        super();
        this.loading = false;
    }

    connectedCallback() {
        super.connectedCallback();
        this.shadowRoot.addEventListener('submitProject', this._submitProject);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener('submitProject', this._submitProject);
    }

    _submitProject() {
        // realizar petición a la API
        // this.lo 'url', (result) => {
        //   if(result.status === 200) {
        //   }
    }

    static get styles() {
        return [
            css_detail,
            css_new,
            css`
            .containerDetail {
                position: relative;
                margin-top: 50px;
            }
            h1 {
                font-size: 24px;
                color: rgba(241,111,92,1);
            }
            button-generic {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -70px;
            }
        
        `
        ];
    }

    render() {
        return html`
            <div class="containerDetail">
                <h1>Create project</h1>
                <p class="greyLetter">Title</p>
                <input type="text" class="description" name="title" />
                <p class="orangeLine"></p>
                <p class="greyLetter">Description</p>
                <textarea class="description" name="description"></textarea>
                <p class="orangeLine"></p>
                <p class="greyLetter">Invite a user</p>
                <input type="email" class="invitation" placeholder="Insert a email" />
                ${this.loading ?
                    html`<spinner-loader></spinner-loader>`:
                    html`<button-generic
                        backgroundColor="linear-gradient(135deg, rgba(255,166,46,1) 0%, rgba(241,111,92,1) 33%, rgba(246,41,12,1) 63%, rgba(240,47,23,1) 70%, rgba(234,77,44,1) 100%)"
                        img="/src/svgs/done-24px.svg"
                        action="submitProject">
                    </button-generic>`}
            </div>
        `
    }
}

customElements.define('create-project', NewProject);
