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
        };
    }
    constructor() {
        super();
        this.loading = false;
        this.list = [
            {
                description: 'I have a special lunch date today for an important deal at work at 3:00 pm These are the most important...',
                title: 'Breakfast',
                hour: '10:00 AM',
                color: 'linear-gradient(to right top, #F869D5, #5650DE)'
            },
            {
                description: 'I have a special lunch date today for an important deal at work at 6:00 pm These are the most important...',
                title: 'Work lunch',
                hour: '1:00 PM',
                color: 'linear-gradient(to right top, #FFA62E, #EA4D2C)'
            },
            {
                description: 'I have a special lunch date today for an important deal at work at 6:00 pm These are the most important...',
                title: 'Team-building',
                hour: '3:00 PM',
                color: 'linear-gradient(to right top, #FF9897, #F650A0)'
            },
            {
                description: 'I have a special lunch date today for an important deal at work at 6:00 pm These are the most important...',
                title: 'Meeting',
                hour: '4:00 PM',
                color: 'linear-gradient(to right top, #6EE2F5, #6454F0)'
            },
            {
                description: 'I have a special lunch date today for an important deal at work at 6:00 pm These are the most important...',
                title: 'Time to go home',
                hour: '5:00 PM',
                color: 'linear-gradient(to right top, #00FFED, #00B8BA)'
            },
            {
                description: 'I have a special lunch date today for an important deal at work at 6:00 pm These are the most important...',
                title: 'Time to go home',
                hour: '5:00 PM',
                color: 'linear-gradient(to right top, #FFCF1B, #FF881B)'
            }
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
                        color=${item.color}
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
