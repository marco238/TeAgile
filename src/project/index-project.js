// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import '../calendar/calendar';
import '../button/button-generic';
import '../card/card-item';
import '../spinner/spinner-loader';
import project_css from './project.scss';

class IndexProject extends LitElement {
    static get properties() {
        return {
            loading: Boolean,
            list: Array,
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.project = JSON.parse(sessionStorage.currentProject);
        this.gradients = [
            'linear-gradient(to right top, #F869D5, #5650DE)',
            'linear-gradient(to right top, #FFA62E, #EA4D2C)',
            'linear-gradient(to right top, #FF9897, #F650A0)',
            'linear-gradient(to right top, #6EE2F5, #6454F0)',
            'linear-gradient(to right top, #00FFED, #00B8BA)',
            'linear-gradient(to right top, rgb(255, 252, 88), #FFCF1B)'
        ];
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
        window.location.href = '/create-project';
    }

    static get styles() {
        return project_css;
    }

    render() {
        if(this.loading) {
            return html`<spinner-loader></spinner-loader>`
        }
        return html`
            <div class="containerProject">
               <component-calendar></component-calendar>
               ${this.project.tasks.map(task => html`
                    <card-item
                        description=${task.description}
                        hour=${task.startDate.split('T')[1].slice(0, 5)}
                        title=${task.name}
                        color=${this.gradients[task.priority - 1]}
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
