// import { LitElement, html, property, css } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_chat from './chat.scss';
import msgList from './chatData';

class ChatElement extends LitElement {
  static get styles() {
    return [
      css_chat,
      css`
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        @keyframes robot {
          0% {
            transform: rotate(0deg);
            left: 0;
          }
          20% {
            transform: rotate(-45deg);
            left: -100px;
          }
          80% {
            transform: rotate(-45deg);
            left: -100px;
          }
          100% {
            transform: rotate(0deg);
            left: 0;
          }
        }
      `
    ];
  }

  static get properties() {
    return {
      chatType: { type: String }
    };
  }

  constructor() {
    super();
    this.chatType = window.location.pathname.split('/')[1];
  }

  render() {
    return this.chatType === 'chatbot' ? html `
            <div class="container">
              <iframe
                  allow="microphone;"
                  src="https://console.dialogflow.com/api-client/demo/embedded/aa774f26-f161-4901-a436-23d6eadd970c">
              </iframe>
            </div>
          `: html`
            <div class="container">
              <div class="date-info">
                <p>Hoy</p>
              </div>
              <div class="messages-container">
                <div class="messages-lines">
                  ${this.printMessages()}
                </div>
                <div></div>
              </div>
              <div class="message-sender">
                <div class="input-box">
                  <button>
                    <img src="/src/svgs/smiley-face.svg" alt="Smiley face">
                  </button>
                  <input type="text" placeholder="Escribe el mensaje...">
                </div>
                <div class="chat-buttons">
                  <button>
                    <img src="/src/svgs/microphone.svg" alt="Microphone">
                  </button>
                  <button>
                    <img src="/src/svgs/send.svg" alt="Send message">
                  </button>
                </div>
              </div>
              <div id="robot">
                <img src="/src/imgs/robot.png" alt="Robot">
              </div>
            </div>
          `;
  }

  printMessages() {
    return msgList.messages.map(msg => html`<p class="${msg.userId === 1 ? 'me' : 'away'}">${msg.text}</p>`);
  }
}

customElements.define('chat-element', ChatElement);
