import { html, LitElement, css } from 'lit-element';
import css_home from './home.scss';

import '../button/button-generic';

class HomeElement extends LitElement {
  static get styles() {
    return css_home;
  }

  static get properties() {
    return {
      userId: { type: Number },
      projects: { type: Array }
    };
  }

  constructor() {
    super();
    this.projects = JSON.parse(sessionStorage.user).projects;
    let session = JSON.parse(sessionStorage.user);
    this.userId = session.id;
  }

  // firstUpdated() {
  //   let url = `http://10.94.32.165:8200/api/v1/projects?userId=${this.userId}`;
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       // const user = JSON.parse(sessionStorage.user);
  //       // user.projects = new Array(data.projects);
  //       // sessionStorage.setItem('user', JSON.stringify(user));
  //     })
  //     .catch(e => {
  //       console.log('Error: ', e);
  //     });
  // }

  connectedCallback() {
    super.connectedCallback();
    this.shadowRoot.addEventListener('createTask', this._createTask);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.shadowRoot.removeEventListener('createTask', this._createTask);
  }

  _createTask() {
    window.location.href = '/create-project';
  }

  _openTasks() {
    window.location.href = '/project';
  }

  render() {
    return html`
      <div class="home-container">
        <div class="projects-container">
          ${this.projects.map(proj => html`
            <div class="project-card" @click="${() => this._openTasks()}">
              <img src="/src/svgs/delete.svg" class="delete-project-icon" alt="Delete Project"></img>
              <span>${proj.name}</span>
              <p>${proj.description}</p>
            </div>
          `)}
        </div>
        <button-generic
          backgroundColor="linear-gradient(135deg, rgba(255,166,46,1) 0%, rgba(241,111,92,1) 33%, rgba(246,41,12,1) 63%, rgba(240,47,23,1) 70%, rgba(234,77,44,1) 100%)"
          img="/src/svgs/add-24px.svg"
          action="createTask">
        </button-generic>
      </div>
        `;
  }
}

customElements.define('home-element', HomeElement);
