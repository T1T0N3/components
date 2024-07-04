import { html,css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
export class LakeTreeSlider extends LitElement {
  static styles = css`
    .slidecontainer {
      width: 100%;
    }
    .selectedValue {
      font-weight: bold;
    }  
    .hidden {
      display: none;
    }  
    .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 10px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      border-radius:5px;
    }
    
    .slider:hover {
      opacity: 1;
    }
    
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      border-radius:15px;
      width: 25px;
      height: 25px;
      background: var(--ntx-form-theme-color-primary);
      cursor: pointer;
    }
    
    .slider::-moz-range-thumb {
      width: 25px;
      border-radius:15px;
      height: 25px;
      background: var(--ntx-form-theme-color-primary);
      cursor: pointer;
    }
          
    .valueAlignRight {
      width: 10px !important;
      text-align: right;
      text-wrap: nowrap;
    }
  `
  static properties = {
    title: {type: String },
    value: {type: Number },
    minValue: {type: Number },
    minValueLabel: {type: String },
    maxValue: {type: Number },
    maxValueLabel: {type: String },
    scaleDisplay: {type: String},
  };
  static getMetaConfig() {
    return {
      controlName: 'LakeTree Slider',
      iconUrl: "https://laketree.com/wp-content/themes/laketree/img/favicon/favicon-32x32.png",
      groupName : 'LakeTree',
      fallbackDisableSubmit: false,
      version: '1.2',
      standardProperties : {
        defaultValue: true,
        description: true,
        fieldLabel: true,
        readOnly: true,
        required: true,
        visibility: true
      },
      properties: {
        minValue: {
          type: 'integer',
          title: 'Min Value',
          defaultValue: 0
        },
        minValueLabel: {
          type: 'string',
          title: 'Min Value Label'
        },
        maxValue: {
          type: 'integer',
          title: 'Max Value',
          defaultValue: 10
        },
        maxValueLabel: {
          type: 'string',
          title: 'Max Value Label'
        },
        value: {
          type: 'integer',
          title: 'Value',
        },
        scaleDisplay: {
          title: 'Scale Display',
          type: 'string',
          enum: ['None', 'Pipe', 'Number Scale'],
          showAsRadio: false,
          verticalLayout: true,
          defaultValue: 'Pipe',
        },
      },
      events: ["ntx-value-change"],
    };
  }
  constructor() {
    super();
  }
sliderChanged(e)  {
  const args = {
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: e.srcElement.value,
  };
  const event = new CustomEvent('ntx-value-change', args);
  this.dispatchEvent(event);
