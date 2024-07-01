
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
          isValueField: true,
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

}

      render() {
        console.log("render");
    
//from max value, create table i f required.


      debugger;  

      this._minValue = this.minValue ?? 0;
      this._maxValue = this.maxValue ?? 10;

      this._defaultValue = this._defaultValue ?? 0;      
      this.value = this.value ?? this._defaultValue;  //set the value to the default value if not set.
      this._scaleDisplay = this.scaleDisplay ?? "Pipe";

      const arrMaxValue = [];
      for (let i=0; i <= this._maxValue; i++) {
        if (i%10 != 0) continue;
        var row = {};
        row.id = i;

        if (this._scaleDisplay == "Pipe") row.display = "|"; 
        if (this._scaleDisplay == "Number Scale") row.display = i;         

        if (i == this._maxValue) {
          row.align = "Right";
          row.width = "";

        } else {
          row.align = "Left";
          row.width = 100/this._maxValue;
        }

        arrMaxValue.push(row);
        
      }
      this._disabledStyle = this.readOnly ? "pointer-events: none;opacity:.5;" : ""; //if readonly, set the opacity to 50% and disable pointer events.

      var scaleClass = "";
      if(this._scaleDisplay == "None") {
        scaleClass = "hidden";
      }

        debugger;
        return html`

                    <div class="slidecontainer" style="${this._disabledStyle}">

                    <div class="${scaleClass}" style="margin: 5px;"><table style="width:100%"  ><tr>

                    ${arrMaxValue.map((row) => html`

                     <td width="${row.width}%" class=\"sliderValue valueAlign${row.align}\" >${row.display}</td>

                    `)}

                    </tr></table></div>
        
                    <input type="range" min="${this._minValue}" max="${this._maxValue}" value="${this.value}" class="slider" @change=${this.sliderChanged} @onchange=${this.sliderChanged} id="myRange">
                    <table style="width:100%;padding-top: 5px;"><tr><td align=left>${this.minValueLabel}</td><td align=right>${this.maxValueLabel}</td></tr></table>
                    </div>
            
        `;
    
                  }

}


const elementName = 'laketree-slider';
customElements.define(elementName, LakeTreeSlider);
