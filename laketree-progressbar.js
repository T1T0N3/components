import {
  html,
  css,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

// define the component
export class LaketreeProgressbar extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .container {
      width: 300px; /* Aumentato */
      height: 300px; /* Aumentato */
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .circle {
      position: relative;
      width: 250px; /* Aggiornato per garantire un margine */
      height: 250px; /* Aggiornato per garantire un margine */
    }

    .circle svg {
      transform: rotate(-90deg);
    }

    .circle circle {
      fill: none;
      stroke-width: 10;
      width: 100%;
      height: auto;
      stroke: var(--circle-bg-color, #e6e6e6);
    }

    .circle .progress {
      stroke: var(--circle-color, #4caf50);
      stroke-linecap: round;
      stroke-dasharray: 625; /* Aggiornato per la nuova circonferenza */
      stroke-dashoffset: 625; /* Aggiornato per la nuova circonferenza */
      transition: stroke-dashoffset 1s ease;
    }

    .circle .number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5em;
      font-weight: bold;
      color: var(--circle-text-color, #000);
    }
  `;

  static getMetaConfig() {
    return {
      controlName: 'Questionnair score',
      iconUrl:
        'https://laketree.com/wp-content/themes/laketree/img/favicon/favicon-32x32.png',
      groupName: 'LakeTree',
      fallbackDisableSubmit: false,
      version: '1.2',
      standardProperties: {
        defaultValue: true,
        description: true,
        fieldLabel: true,
        readOnly: true,
        required: true,
        visibility: true,
      },
      properties: {
        score: {
          type: 'integer',
          title: 'Score',
          defaultValue: 0,
        },
      },
    };
  }

  static properties = {
    score: { type: Number },
  };

  constructor() {
    super();
    this.score = 0;
  }

  updated(changedProperties) {
    if (changedProperties.has('score')) {
      this.updateCircle();
    }
  }

  updateCircle() {
    const radius = 100; // Aggiornato per la nuova dimensione
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.score / 100) * circumference;
    this.shadowRoot.querySelector('.progress').style.strokeDashoffset = offset;
  }

  render() {
    return html`
      <div class="container">
        <div class="circle">
          <svg width="250" height="250">
            <!-- Aggiornato -->
            <circle class="progress" cx="125" cy="125" r="100"></circle>
            <!-- Aggiornato -->
          </svg>
          <div class="number">${this.score}%</div>
        </div>
      </div>
    `;
  }
}

const elementName = 'mapei-score';
customElements.define(elementName, LaketreeProgressbar);
