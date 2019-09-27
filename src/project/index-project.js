// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import '../calendar/calendar';
import '../button/button-generic';
import '../card/card-item';
import project_css from './project.scss';

class IndexProject extends LitElement {
    static get properties() {
        return {
            loading: Boolean,
            list: Array,
        }
    }
    constructor() {
        super();
        this.loading = false;
        this.list = [{description: 'asdflasjd', title: 'title 1', hour: '3:00 PM'},{description: 'asdflasjd asdflasjd asdflasjd', title: 'title 2', hour: '6:00 PM'}]
    }

    connectedCallback() {
        super.connectedCallback();
        this.shadowRoot.addEventListener('createProject', this._createProject);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener('createProject', this._createProject);
    }

    _createProject() {
        console.log('createProject');
        window.location.href = '/create-project';
    }

    static get styles() {
        return project_css;
    }

    render() {
        return html`
            <div class="containerProject">
               <component-calendar></component-calendar>
               ${this.list.map(item => html`
                    <card-item
                        description=${item.description}
                        hour=${item.hour}
                        title=${item.title}
                    ></card-item>`
                )}
                <button-generic
                    backgroundColor="linear-gradient(135deg, rgba(255,166,46,1) 0%, rgba(241,111,92,1) 33%, rgba(246,41,12,1) 63%, rgba(240,47,23,1) 70%, rgba(234,77,44,1) 100%)"
                    img="/src/svgs/add-24px.svg"
                    action="createProject">
                </button-generic>
            </div>
        `
    }
}

customElements.define('index-project', IndexProject);
