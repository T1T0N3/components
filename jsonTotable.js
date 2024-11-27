import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class JsonToTable extends LitElement {
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
  `;

  static getMetaConfig() {
    return {
      controlName: 'Dynamic JSON Table',
      iconUrl:
        'https://sp.mapei.group/sites/mapeinetit/en/SiteAssets/logo_mapei_inet.png',
      groupName: 'Mapei Custom Fields',
      fallbackDisableSubmit: false,
      version: '1.0',
      standardProperties: {
        fieldLabel: true,
        required: true,
        visibility: true,
      },
      properties: {
        jsonData: {
          type: 'string',
          title: 'JSON Data',
          description: 'Insert JSON string to generate the table.',
        },
      },
    };
  }

  static properties = {
    jsonData: { type: String },
  };

  constructor() {
    super();
    this.jsonData = '[]'; // Default JSON
  }

  get parsedData() {
    try {
      return JSON.parse(this.jsonData);
    } catch (error) {
      console.error('Invalid JSON:', error);
      return [];
    }
  }

  render() {
    const data = this.parsedData;

    // Check if data is valid for table generation
    if (!Array.isArray(data) || data.length === 0) {
      return html`<p>No valid data provided.</p>`;
    }

    const headers = Object.keys(data[0]); // Extract headers from the first object

    return html`
      <table>
        <thead>
          <tr>
            ${headers.map((header) => html`<th>${header}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${data.map(
            (row) => html`
              <tr>
                ${headers.map((key) => html`<td>${row[key]}</td>`)}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }
}

const elementName = 'json-to-table';
customElements.define(elementName, JsonToTable);
