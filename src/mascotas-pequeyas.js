import { LitElement, css, html } from 'lit'




export class MascotasPequeyas extends LitElement {
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
        * Este es el titulo 2  de mi pagina 
       */
      title2: { type: String },

      /**
       * Este es el parrafo 2
       */
      paragraph2: { type: String },

      /**
        * Este es el titulo 3  de mi pagina 
       */
      title3: { type: String },

      /**
       * Este es el parrafo 3
       */
      paragraph3: { type: String },

      /**
       * Esta es la url de la image 1
       */
      Image1url: { type: String },

      /**
         * Este es el titulo 4  de mi pagina 
        */
      title4: { type: String },

      /**
       * Este es el parrafo 4
       */
      paragraph4: { type: String },

      /**
         * Este es el titulo 5  de mi pagina 
        */
      title5: { type: String },

      /**
       * Este es el parrafo 5
       */
      paragraph5: { type: String },

      /**
         * Este es el titulo 6  de mi pagina 
        */
      title6: { type: String },

      /**
       * Este es el parrafo 6
       */
      paragraph6: { type: String },

      


    }
  }

  constructor() {
    super()

    this.title = 'PERROS DE RAZA PEQUEYA'

    this.title1 = 'Chihuahua'
    this.paragraph1 = '  Tamaño: Muy pequeño, Temperamento: Valiente, alerta y leal, Pelaje: Corto o largo, variedad de colores,Uso: Compañía, perro de apartamentoNúmero  '

    this.title2 = 'Pomerania'
    this.paragraph2 = 'Tamaño: Pequeño, Temperamento: Juguetón, extrovertido y alerta,Pelaje: Largo y denso, variedad de colores,Uso: Compañía, perro de apartamento  '

    this.title3 = ' Bichón Frisé'
    this.paragraph3 = 'Tamaño: Pequeño, Temperamento: Alegre, sociable y cariñoso,Pelaje: Rizado y suave, generalmente blanco, Uso: Compañía, perro de apartamento'
    this.Image1url = 'https://hospitalveterinario.cr/wp-content/uploads/2019/03/perros-pequenos-1.jpg '

    this.title4 = ' Shih Tzu'
    this.paragraph4 = ' Tamaño: Pequeño, Temperamento: Amistoso, tranquilo y cariñoso,Pelaje: Largo y sedoso, variedad de colores,Uso: Compañía, perro de apartamento '

    this.title5 = 'Yorkshire Terrier  '
    this.paragraph5 = ' Los Yorkshire Terriers son perros pequeños y elegantes con un pelaje largo y sedoso A pesar de su tamaño, tienen una personalidad audaz y están llenos de energía. Son inteligentes y pueden ser entrenados fácilmente, aunque a veces pueden ser un poco tercos. Son excelentes compañeros para quienes buscan un perro pequeño pero activo.'

    this.title6 = ' Pug  '
    this.paragraph6 = 'Los Pugs son perros de tamaño pequeño a mediano. Generalmente pesan entre 6 y 9 kilogramos y miden alrededor de 25-30 centímetros de altura a la cruz  '

    



  }

  render() {
    return html`
      <div id = "main">
        <h1>${this.title}</h1>
        
        <h1>${this.title1}</h1>
        <p>${this.paragraph1}</p>

        <h1>${this.title2}</h1>
        <p>${this.paragraph2}</p>
        
        <h1>${this.title3}</h1>
        <p>${this.paragraph3}</p>
        <img src = "${this.Image1url}">

        <h1>${this.title4}</h1>
        <p>${this.paragraph4}</p>
        
        <h1>${this.title5}</h1>
        <p>${this.paragraph5}</p>
        
        <h1>${this.title6}</h1>
        <p>${this.paragraph6}</p>
        
               

        
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
        background-color: yellow;
      }
      #parrafo {
        background-color: palegreen;
        
      }
      #main {
        background-color: rgb(187, 109, 109);
        font-family: Times;
        color: beige  
      }
      div{
        padding: 15vw ;
      }
      #main {
        background-color: blue
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
        color: beige;
      }
      #titulo-2 {
        color: lawngreen;
      }
      #titulo-3 {
        color: darkblue;
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

window.customElements.define('mascotas-pequeyas', MascotasPequeyas)
