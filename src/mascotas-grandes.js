import { LitElement, css, html } from 'lit'




export class MascotasGrandes extends LitElement {
  static get properties() {
    return {

      /**
       * Este es el titulo  de mi pagina 
      */
      title: { type: String },


      /**
       * Este es el titulo 1 de mi pagina 
      */
      title1: { type: String },

      /**
       * Este es el parrafo 1
       */
      paragraph1: { type: String },

      /**
       * Esta es la Url de la imagen 1
       */
      Image1url: { type: String },

      /**
        * Este es el titulo 2  de mi pagina 
       */
      title2: { type: String },

      /**
       * Este es el parrafo 2
       */
      paragraph2: { type: String },

      /**
       * Esta es la Url de la imagen 2
       */
      Image2url: { type: String },

      /**
        * Este es el titulo 3  de mi pagina 
       */
      title3: { type: String },

      /**
       * Este es el parrafo 3
       */
      paragraph3: { type: String },

      /**
       * Esta es la Url de la imagen 3
       */
      Image3url: { type: String },

      /**
         * Este es el titulo 4  de mi pagina 
        */
      title4: { type: String },

      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },

      /**
       * Esta es la Url de la imagen 4
       */
      Image4url: { type: String },

      /**
         * Este es el titulo 5  de mi pagina 
        */
      title5: { type: String },

      /**
       * Este es el parrafo 5
       */
      paragraph5: { type: String },


      /**
       * Esta es la url de la image 5
       */
      Image5url: { type: String },



    }
  }

  constructor() {
    super()

    this.title = 'PERROS DE RAZA GRANDE'

    this.title1 = 'SAN BERNARDO   '
    this.paragraph1 = '  Conocido por su tamaño impresionante y su temperamento gentil.  '
    this.Image1url = 'https://i.ytimg.com/vi/kKlF_WAMNEA/maxresdefault.jpg'

    this.title2 = 'Gran Danés  '
    this.paragraph2 = ' Una de las razas más grandes, pero también una de las más amables.     '
    this.Image2url = 'https://tse2.mm.bing.net/th?id=OIP.E5ApoveiMsQv2N0d0A8z6AHaHa&pid=Api&P=0&h=180'

    this.title3 = 'Terranova  '
    this.paragraph3 = ' Con su grueso pelaje y su naturaleza amistosa, es un gran compañero  '
    this.Image3url = 'https://tse4.mm.bing.net/th?id=OIP.Yl2B4--ZUEg0vytVR74-RAHaGi&pid=Api&P=0&h=180  '

    this.title4 = 'Pastor Alemán   '
    this.paragraph4 = 'No solo grande, sino también inteligente y leal.      '
    this.Image4url = 'https://tse2.mm.bing.net/th?id=OIP.Gp-CHj-ZuvVICXgkOKJJLQHaFj&pid=Api&P=0&h=180  '

    this.title5 = 'Rottweiler     '
    this.paragraph5 = 'Fuerte y seguro de sí mismo, este perro es un excelente guardián.   '
    this.Image5url = 'https://tse4.mm.bing.net/th?id=OIP.-Jxf-zWoi4STyIzKwP4LQAHaFj&pid=Api&P=0&h=180  '
    



  }

  render() {
    return html`
      <div id = "main">
        <h1>${this.title}</h1>
        
        <h1>${this.title1}</h1>
        <p>${this.paragraph1}</p>
        <img src = "${this.Image1url}">

        <h1>${this.title2}</h1>
        <p>${this.paragraph2}</p>
        <img src = "${this.Image2url}">
        
        <h1>${this.title3}</h1>
        <p>${this.paragraph3}</p>
        <img src = "${this.Image3url}">
        
        <h1>${this.title4}</h1>
        <p>${this.paragraph4}</p>
        <img src = "${this.Image4url}">
        
        <h1>${this.title5}</h1>
        <p>${this.paragraph5}</p>
        <img src = "${this.Image5url}">
        
       
        
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
      body{
        background-color: palegoldenrod
      }
      #parrafo {
        background-color: teal
        
      }
      #main {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: navy  
      }
      div{
        padding: 15vw ;
      }
      #main {
        background-color: cyan
      }
      img {
        width:20vw;
      }
      p {
        font-size:8vh;
      }
      h1{
        font-size:10vh;
      }

      #titulo-1 {
        color: coral;
      }
      #titulo-2 {
        color: aqua;
      }
      #titulo-3 {
        color: chartreuse;
      }
      #titulo-4 {
        color: brown;
      }
      #titulo-5 {
        color: darkgreen;
      }
      #titulo-6 {
        color: darkorchid;

      }


    `
  }
}

window.customElements.define('mascotas-grandes', MascotasGrandes)
