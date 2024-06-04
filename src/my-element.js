import { LitElement, css, html } from 'lit'
import'./mascotas-grandes'
import'./mascotas-medianas'
import'./mascotas-pequeyas'


export class MyElement extends LitElement {
  static get properties() {
    return {

      /**
       * The number of page currently displayed
       */
      position: { type: Number },
    

    }
  }

  constructor() {
    super()
    this.position = 0
  }

  setPrevios(e) {
    if (this.position === 0) {
      this.position = 2
    } else {
      this.position --
    }
  }

  setNext (e) {
    if (this.position === 2){
      this.position = 0
    } else {
      this.position++
    }
  }
  render() {
    return html`
      <div>
    <button @click="${this.setPrevios}">Anterior</button>
    <button @click="${this.setNext}">Siguiente</button>
    <h1>${this.position}</h1>
    ${this.position === 0 ? html` <mascotas-grandes></mascotas-grandes>` : ''}

    ${this.position === 1 ? html`<mascotas-medianas></mascotas-medianas>` : ''}

    ${this.position === 2 ? html`<mascotas-pequeyas></mascotas-pequeyas>` : ''}
     
  
     </div>
      
    `
  }

 

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

  
    `
  }
}

window.customElements.define('my-element', MyElement)
