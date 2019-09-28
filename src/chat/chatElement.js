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

  render() {
    return html`
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

  firstUpdated() {
    // console.log(msgList.messages);
  }

  printMessages() {
    return msgList.messages.map(msg => html`<p class="${msg.userId === 1 ? 'me' : 'away'}">${msg.text}</p>`);
  }
}

customElements.define('chat-element', ChatElement);
