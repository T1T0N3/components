
import {html,css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class LaketreeProgressbar extends LitElement {

  static styles = css` 
  
  .container{
    width: 110px;
    height: 110px;
    margin: 100px auto;
}
.prec{
    top: 30px;
    position: relative;
    font-size: 30px;
}

.circle{
    position: relative;
    top: 5px;
    left: 5px;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #E6F4F7;
}

.active-border{
    position: relative;
    text-align: center;
    width: 110px;
    height: 110px;
    border-radius: 100%;

    background-color:#39B4CC;
    background-image:
        linear-gradient(91deg, transparent 50%, #A2ECFB 50%),
        linear-gradient(90deg, #A2ECFB 50%, transparent 50%);
    
}

   
    
  `


  static properties = {
    value: {type: Number },
    showLabel: {type: Boolean },
  };

  static getMetaConfig() {
    return {
      controlName: 'Laketree Progressbar',
      iconUrl: "https://laketree.com/wp-content/themes/laketree/img/favicon/favicon-32x32.png",
      groupName : 'LakeTree',
      fallbackDisableSubmit: false,
      version: '1.2',
      standardProperties : {
        visiblity: true
      },
      properties: {
        value: {
          type: 'number',
          title: 'Value'
        },
        showLabel: {
          title: 'Show Label',
          type: 'boolean',
          defaultValue: true,
        },
      }
    };
  }

var i = 0 , prec;
var degs = $("#prec").attr("class").split(' ')[1];
var activeBorder = $("#activeBorder");

setTimeout(function(){
    if($("#circle").is(":hover"))
       loopit("c");
    else
       loopit("nc");
},1);

loopit(dir){
    if (dir == "c")
        i++
    else
        i--;
    if (i < 0)
        i = 0;
    if (i > degs)
        i = degs;
    prec = (100*i)/360;   
    $(".prec").html(Math.round(prec)+"%");
    
    if (i<=180){
        activeBorder.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    else{
        activeBorder.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
    }
    
    setTimeout(function(){
        if($("#circle").is(":hover"))
            loopit("c");
        else
           loopit("nc");
    },1);
    
}

  constructor() {
    super();
  }

  render() {
    
    this._showLabel = this.showLabel ?? true;
    this._height = 10;
    this._displayValue = "";

    this._defaultValue = this.value;
    this._defaultValue = this._defaultValue ?? 0;   
    this._class ="p0";   


    if (this._defaultValue == 0) {  
      this._showLabel = false;
       this._class = "p"+this._defaultValue;
    }

    if(this._showLabel) {
        this._displayValue = this._defaultValue + '%';
        this._class = "p"+this._defaultValue;
        this._height = 18;
      }


    return html`
    <style>

    .laketree-pbar {
      height:${this._height}px;          
    }

    </style>
    
  <div class="container">
    <div id="activeBorder" class="active-border">
        <div id="circle" class="circle">
            <span class="prec 270" id="prec">0%</span>
        </div>
    </div>
</div>

        `;
  }
}

const elementName = 'laketree-progressbar';
customElements.define(elementName, LaketreeProgressbar);
