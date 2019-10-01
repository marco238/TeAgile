import { html, LitElement, css } from 'lit-element';
import css_home from './home.scss';

import '../button/button-generic';

class HomeElement extends LitElement {
  static get styles() {
    return css_home;
  }

  static get properties() {
    return {
      projects: { type: Array }
    };
  }

  constructor() {
    super();
    this.projects = JSON.parse(sessionStorage.user).projects;
  }

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

  _openProject(project) {
    const url = `http://localhost:3000/tasks/${project.id}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const currentProject = {
          id: project.id,
          user: project.user,
          name: project.name,
          description: project.description,
          tasks: data
        };
        sessionStorage.setItem('currentProject', JSON.stringify(currentProject));
        window.location.href = '/project';
      })
      .catch(e => {
          console.log('Error: ', e);
      });
  }

  render() {
    return html`
      <div class="home-container">
        <div class="projects-container">
          ${this.projects.map(proj => html`
            <div class="project-card" @click="${() => this._openProject(proj)}">
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
