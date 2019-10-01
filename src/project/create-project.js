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
        };
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
                margin-top: 10px;
                padding: 2px 10px;
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.137);
            }

            h1 {
                font-size: 24px;
                color: rgb(241,111,92);
            }

            .buttons-container {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -70px;
                display: flex;
                justify-content: space-between;
                width: 200px;
            }

            .title-container, .email-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                height: 55px;
                margin-bottom: 40px;
            }

            label {
                color: rgb(241,111,92);
                font-size: 16px;
            }

            input {
                width: auto;
                height: 10px;
                padding: 5px 8px;
                font-size: 18px;
                color: #3E4A59;
                border: none;
                border-bottom: 1px solid rgba(0, 0, 0, 0.116);
                transition: all 0.5s ease;
            }

            input:focus {
                height: 30px;
                border-bottom: 3px solid #5D74E2;
            }

            .description-container {
                display: flex;
                flex-direction: column;
                margin-bottom: 40px;
            }

            textarea {
                width: auto;
                display: block;
                font-size: 18px;
                color: #3E4A59;
            }

            ::placeholder {
                font-size: 14px;
                color: #B0B6D0;
            }
        `
        ];
    }

    render() {
        return html`
            <div class="containerDetail">
                <h1>Create project</h1>
                <div class="title-container">
                    <label>Title</label>
                    <input type="text" class="title" name="title" placeholder="Project title..." />
                </div>
                <div class="description-container">
                    <label>Description</label>
                    <textarea class="description" name="description" placeholder="Project description..."></textarea>
                </div>
                <div class="email-container">
                    <label>Invite an user</label>
                    <input type="email" class="invitation" placeholder="Insert an email..." />
                </div>
                ${this.loading ?
                    html`<spinner-loader></spinner-loader>`:
                    html`
                        <div class="buttons-container">
                            <a href="/home">
                                <button-generic
                                    action="submitProject">
                                </button-generic>
                            </a>
                            <button-generic
                                backgroundColor="linear-gradient(135deg, rgba(255,166,46,1) 0%, rgba(241,111,92,1) 33%, rgba(246,41,12,1) 63%, rgba(240,47,23,1) 70%, rgba(234,77,44,1) 100%)"
                                img="/src/svgs/done-24px.svg"
                                action="submitProject">
                            </button-generic>
                        </div>
                    `}
            </div>
        `
    }
}

customElements.define('create-project', NewProject);
