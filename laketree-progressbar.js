
import {html,css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class LaketreeProgressbar extends LitElement {

  static styles = css` 
  
  .container {
    width: 100%;
    background-color: #ddd;
    border-radius:10px;    
  }
  
  .laketree-pbar {
    border-radius:10px;    
    text-align: right;
    background-color: var(--ntx-form-theme-color-primary);
    color: var(--ntx-form-theme-color-form-background);
  }

   @import "compass";
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900');

      body {
        font-family: "Titillium Web", sans-serif;
        margin: 0 auto;
      }

      // VARS
      $circle-width: 0.09em;
      $circle-width-hover: 0.07em;

      // colors default
      $primary-color: #000000; // czarny
      $secondary-color: #dfe8ed; //szary bcg
      $bg-color: #ffffff; //srodkowy bezowy 

      // colors customized
      $primary-color-blue: #30bae7;
      $primary-color-green: #15c7a8;
      $primary-color-orange: #eb7d4b; 
      $primary-color-pink: #d74680; 
      $primary-color-span: #3c4761;

      // CIRCLE
      // classes 2 extend
      .rect-auto{
        clip: rect(auto, auto, auto, auto);
      }

      .pie {
        position: absolute;
        border: $circle-width solid $primary-color;
        width: 1 - (2 * $circle-width);
        height: 1 - (2 * $circle-width);
        clip: rect(0em, 0.5em, 1em, 0em);
        border-radius: 50%;
        @include rotate(0deg);
      }

      .pie-fill {
        @include rotate(180deg);
      }
      .wrapper {
        width: 1200px;
        margin: 0 auto;
      }


      // main
      .c100 {

        *, *:before, *:after {
          @include box-sizing(content-box);
        }

        position: relative;
        font-size: 160px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        float: left;
        margin: 0.4em;
        background-color: $secondary-color;

      // 	// center circle to its parent
      // 	&.center{
      // 		float: none;
      // 		margin: 0 auto;
      // 	}

      // 	&.small{
      // 		font-size: 80px;
      // 	}

        // centered value inside circle
        > span {
          position: absolute;
          width: 100%;
          z-index: 1;
          left: 0;
          top: 0;
          width: 5em;
          line-height: 5em;
          font-size: 0.2em;
          color: $primary-color-span;
          display: block;
          text-align: center;
          white-space: nowrap;
          @include transition-property(all);
          @include transition-duration(0.2s);
          @include transition-timing-function(ease-out);
        }

        // background inside the circle
        &:after{
          position: absolute;
          top: $circle-width;
          left: $circle-width;
          display: block;
          content: " ";
          border-radius: 50%;
          background-color: $bg-color;
          width: 1 - (2 * $circle-width);
          height: 1 - (2 * $circle-width);
          @include transition-property(all);
          @include transition-duration(0.2s);
          @include transition-timing-function(ease-in);

        }

        // the slice (mask)
        .slice {
          position: absolute;
          width: 1em;
          height: 1em;
          clip: rect(0em, 1em, 1em, 0.5em);
        }

        // circle to show the status
        .bar {
          @extend .pie;
        }


        // loop to create all needed elements automatically
        @for $j from 51 through 100 {

          &.p#{$j} .slice {
            @extend .rect-auto;
          }

          &.p#{$j} .bar:after{
            @extend .pie-fill;
          }

          &.p#{$j} .fill{
            @extend .pie;
            @extend .pie-fill;
          }

        }

        // loop to rotate all 100 circles
        @for $j from 1 through 100 {
          &.p#{$j} .bar {
            @include rotate((360/100*$j) + deg);
          }
        }



        // hover styles
        &:hover{

          cursor: default;

          > span {
            width: 3.33em;
            line-height: 3.33em;
            font-size: 0.3em;
            color: $primary-color-span;
          }

          &:after{
            top: $circle-width-hover;
            left: $circle-width-hover;
            width: 1 - (2 * $circle-width-hover);
            height: 1 - (2 * $circle-width-hover);
          }

        }
        
        // blue
        &.blue{

          .bar, .fill { border-color: $primary-color-blue !important;}

          &:hover{
            > span { color: $primary-color-span;}
          }

        }


        // pink skin
        &.pink{

          .bar, .fill { border-color: $primary-color-pink !important;}

          &:hover{
            > span { color: $primary-color-span;}
          }

        }


        // green skin
        &.green{

          .bar, .fill { border-color: $primary-color-green !important;}

          &:hover{
            > span { color: $primary-color-span;}
          }

        }


        // orange skin
        &.orange{

          .bar, .fill { border-color: $primary-color-orange !important;}

          &:hover{
            > span { color: $primary-color-span;}
          }

        }

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
    <div class="c100 ${this._class} blue">
      <span>${this._displayValue} ${this._class}</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
  </div>
  </div>

        `;
  }
}

const elementName = 'laketree-progressbar';
customElements.define(elementName, LaketreeProgressbar);
