import { html,css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class SimpleTable extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
    }

    th {
      background-color: #f2f2f2;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
    }
    
    .text-vertical {
       writing-mode: vertical-rl;
       text-orientation: mixed;
    }
    .td-width {
       width: 4%;
    }
  `;

   static getMetaConfig() {
    return {
      controlName: 'Questionnaire table legend',
      iconUrl:
        'https://sp.mapei.group/sites/mapeinetit/en/SiteAssets/logo_mapei_inet.png',
      groupName: 'Mapei Custom Fields',
      fallbackDisableSubmit: false,
      version: '1.2',
      standardProperties: {
        defaultValue: false,
        description: false,
        fieldLabel: false,
        readOnly: false,
        required: false,
        visibility: true,
      },
      properties: {
        headers: {
          type: 'string',
          title: 'Headers',
        },
        data: {
          type: 'string',
          title: 'Data',
        },
      },
    };
  }

  static properties = {
    headers: { type: Array },
    data: { type: Array },
  };

  constructor() {
    super();
    this.headers = [
      ['', 'td-width'],
      ['EVALUATION QUESTIONNAIRE', ''],
      ['weight', 'text-vertical'],
      ['maximum weighted rating', 'text-vertical'],
      ['SCORING CRITERIA', ''],
    ];
    this.data = [
      [
        '1',
        'Does your Company have an up-to-date ISO 9001 certification?',
        '3',
        '6',
        'Score = 2. If your organisation has a Quality Management System certified by an external certification body according to ISO 9001 standard, please attach the certificate or provide a link where to find it.Score = 1. If you are not certified but you have a Quality Management System in place, please briefly describe it.Score = 0. If you are not certified and do not have a Quality Management System in place'
      ],
      [
        '2',
        'Does your Company have an up-to-date ISO 14001 certification?',
        '3',
        '6',
        'Score = 2. If your organisation has an Environmental Management System certified by an external certification body according to ISO 14001 standard, please attach the certificate or provide a link where to find it. Score = 1. If you are not certified but you have an Environmental Management System in place, please briefly describe it. Score = 0. If you are not certified and do not have an Environmental Management System in place'
      ],
      [
        '3',
        'Does your Company have an up-to-date ISO 45001 (or local standard - e.g. ANSI Z10, CSA Z1000, BSI 8800, or OSHA VPP certification...)?',
        '3',
        '6',
        'Score = 2. If your organisation has an Health and Safety Management System certified by an exernal certification body according to ISO 45001 standard (or local standard), please attach the certificate or provide a link where to find it.Score = 1. If you are not certified but you have an Health and Safety Management System in place, please briefly describe it.Score = 0. If you are not certified and do not have an Health and Safety Management System in place'
      ],
      [
        '4',
        'Does your Company have an  up-to-date SA8000, ETI, or other recognized certification?',
        '2',
        '4',
        'Score = 2. If your organisation has a Social Accountability certification by an external certification body according to SA 8000 standard (ETI, or other recognized standard), please attach the certificate or provide a link where to find it.Score = 0. If you are not certified.'
      ],
      [
        '5',
        'Does your Company have an up-to-date ISO 20400 certification?',
        '2',
        '4',
        'Score = 2. If your organisation has a Sustainable Procurement Management System certified by an external certification body according to ISO 20400, please attach the certificate or provide a link where to find it.Score = 0. If you are not certified.'
      ],
      [
        '6',
        'Does your Company have an up-to-date ISO 50001 certification?',
        '2',
        '4',
        'Score = 2. If your organisation has an Energy Management System certified by an external certification body according to ISO 50001 standard, please attach the certificate or provide a link where to find it.Score = 1. If you are not certified but you undergo regular audit by external parties about your energy consumption Score = 0. If you are not certified and do not have an Energy Management System in place'
      ],
      [
        '7',
        'Does your Company publish a Sustainability Report?',
        '3',
        '6',
        'Score = 2. If your organisation publishes a Sustainability report, please provide a copy or the link where to find it.Score = 0. If your organisation does not publish a Sustainability report.'
      ],
      [
        '8',
        'Is your most recent Report assured by a third party?',
        '1',
        '2',
        'Score = 2. If your organisation publishes a Sustainability report, assured by a third party (please provide the name).Score = 0. If your organisation does not have a Sustainability report, assured by a third party.'
      ],
      [
        '9',
        'Does your Company have a formalized policy related to human rights and social issues or to health and safety?',
        '2',
        '4',
        'Score = 2. If your organisation has a formalized policy related to human rights and social issues or to health and safety, please provide a copy or a link. Score = 0. If your organisation does not have a formalized policy related to human rights and social issues or to health and safety.'
      ],
      [
        '10',
        'Does your Company have a Code of Ethics or a Code of Conduct?',
        '3',
        '6',
        'Score = 2. If your organisation has a Code of Ethics or a Code of Conduct, please provide a copy or a link.Score = 0. If your organisation does not have a Code of Ethics or a Code of Conduct.'
      ],
      [
        '11',
        'Are there any particular actions or initiatives in place to reduce energy consumption or GHG emissions?',
        '1',
        '2',
        'Score = 2, score = 1. Depending on the actions or initiatives in place to reduce energy consumption or GHG emissions, Mapei company will apply the most appropriate score. Score = 0. If you do not have actions or initiatives in place to reduce energy consumption or GHG emissions.'
      ],
      [
        '12',
        'Are there any particular actions or initiatives in place to reduce waste and water/paper/ consumption? Dose your Company have goals and targets to reduce, reuse, and recycle the amount of packaging used for its products?',
        '1',
        '2',
        'Score = 2, score = 1. Depending on the actions or initiatives in place to reduce waste and water/paper/ consumption, Mapei company will apply the most appropriate score. Score = 0. If you do not have actions or initiatives in place to reduce waste and water/paper/ consumption.'
      ],
      [
        '13',
        '13 - Does your company evaluate the environmental impacts of any of your products during its whole life cycle by LCA methodology according to ISO 14040, or the carbon footprint according to ISO 14067?',
        '1',
        '2',
        'Score = 2. If you evaluate the environmental impacts of the product during its whole life cycle by LCA methodology according to ISO 14040,provide details (i.e. LCA report or EPD) Score = 0. If you do not evaluate any environmental impacts of the product during its whole life cycle by LCA methodology according to ISO 14040'
      ],
      [
        '14',
        'Does your Company have sites/operations located in or near to biodiversity and ecosystem-sensitive areas, negatively affected by your activities?',
        '1',
        '4',
        'Score = 4 Company has not sites/operations located in or near to biodiversity and ecosystem-sensitive areas, score = 2. Depending on actions to protect biodiversity and ecosystem. Score = 0. If you do not have any particular initiatives in place to protect biodiversity and ecosystem.',
      ],
      [
        '15',
        'Does your production process use recycled material (pre-consumer or post-consumer) or by-product for any of your product?If yes, please specify in the comments',
        '1',
        '2',
        'Score = 2, score = 1. Depending on the evidence of usage of recycled material (pre-consumer or post-consumer) or by-product for any of your product, Mapei company will apply the most appropriate score.Score = 0. If you do not use recycled material (pre-consumer or post-consumer) or by-product for any of your product.'
      ]
    ];
  }

  render() {
    return html`
    <style>

    .laketree-pbar {
      height:${this._height}px;          
    }

    </style>
      <table>
        <thead>
          <tr>
            ${this.headers.map((header) => html`<th class="${header[1]}">${header[0]}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.data.map(
            (row) => html`
              <tr>
                ${row.map((cell) =>html`<td>${cell}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}

const elementName = 'mapei-table';
customElements.define(elementName, SimpleTable);
