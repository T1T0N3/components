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
      width: 100%;
    }

    .circle {
      position: relative;
      width: 100px;
      height: 100px;
    }

    .circle svg {
      transform: rotate(-90deg);
    }

    .circle circle {
      fill: none;
      stroke-width: 5;
      width: 100%;
      height: auto;
      stroke: var(--circle-bg-color, #e6e6e6);
    }

    .circle .progress {
      stroke: var(--circle-color, #4caf50);
      stroke-linecap: round;
      stroke-dasharray: 255;
      stroke-dashoffset: 255;
      transition: stroke-dashoffset 1s ease;
    }

    .circle .number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.6em;
      font-weight: bold;
      color: var(--circle-text-color, #000);
    }
  `;

  static getMetaConfig() {
    return {
      controlName: 'Questionnaire score',
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
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.score / 100) * circumference;
    this.shadowRoot.querySelector('.progress').style.strokeDashoffset = offset;
  }

  render() {
    return html`
      <div class="container">
        <div class="circle">
          <svg width="100" height="100">
            <circle class="progress" cx="50" cy="50" r="40"></circle>
          </svg>
          <div class="number">${this.score}%</div>
        </div>
      </div>
    `;
  }
}

const elementName = 'mapei-score';
customElements.define(elementName, LaketreeProgressbar);
