import { LitElement, css, html } from 'lit'




export class MascotasMedianas extends LitElement {
  static get properties() {
    return {

      /**
       * Este es el titulo  de mi pagina 
      */
      title: { type: String },

      
      /**
       * Esta es la url de la imagen 1
       */
      Image1url: { type: String },

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

      /**
         * Este es el titulo 7  de mi pagina 
        */
      title7: { type: String },

      /**
       * Este es el parrafo 7
       */
      paragraph7: { type: String },

     


    }
  }

  constructor() {
    super()

    this.title = 'PERROS DE RAZA MEDIANA'
    this.Image1url = 'https://content.elmueble.com/medio/2024/01/25/razas-de-perros-medianos_0a8d288e_240125123642_900x900.jpg '


    this.title1 = 'Labrador Retriever:'
    this.paragraph1 = 'Mediano a grande Amigable, inteligente y enérgico,Compañía, perro de trabajo, perro de rescate '

    this.title2 = 'Bulldog Francés:'
    this.paragraph2 = 'Mediano,Juguetón, tranquilo y afectuoso,Pelaje Corto y suave, con variedad de colores  ,perro de apartamento   '

    this.title3 = 'Cocker Spaniel Inglés'
    this.paragraph3 = 'Tamaño: Mediano, Temperamento: Alegre, cariñoso y activo, Pelaje: Largo y sedoso, generalmente en varios colores,Uso: Compañía, perro de caza  '

    this.title4 = 'Boxer'
    this.paragraph4 = 'Tamaño: Mediano a grande, Temperamento: Juguetón, leal y enérgico, Pelaje: Corto y lustroso, típicamente atigrado,Uso: Compañía, perro guardián, perro de trabajo.   '

    this.title5 = ' Beagle'
    this.paragraph5 = ' Tamaño: Mediano,Temperamento: Curioso, amigable y activo,elaje: Corto y resistente, generalmente en tricolor, Uso: Compañía, perro de caza '

    this.title6 = ' Dalmata'
    this.paragraph6 = ' Tamaño: Mediano, Temperamento: Juguetón, amigable y activo, Pelaje: Corto y blanco con manchas negras o marrones,Uso: Compañía, perro de trabajo, perro de búsqueda y rescate'

    this.title7 = ' Border Collie'
    this.paragraph7 = 'Tamaño: Mediano, Temperamento: Inteligente, enérgico y trabajador, Pelaje: Largo y suave, generalmente en blanco y negro, Uso: Perro pastor, perro de trabajo, perro de deporte   '

    
    



  }

  render() {
    return html`
      <div id = "main">
        <h1>${this.title}</h1>
         <img src = "${this.Image1url}">


        <h1>${this.title1}</h1>
        <p>${this.paragraph1}</p>

        <h1>${this.title2}</h1>
        <p>${this.paragraph2}</p>
        
        <h1>${this.title3}</h1>
        <p>${this.paragraph3}</p>
        
        <h1>${this.title4}</h1>
        <p>${this.paragraph4}</p>
        
        <h1>${this.title5}</h1>
        <p>${this.paragraph5}</p>
        
        <h1>${this.title6}</h1>
        <p>${this.paragraph6}</p>
        
        <h1>${this.title7}</h1>
        <p>${this.paragraph7}</p>
        
       
       
       
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
        background-color: olivedrab
      }
      #parrafo {
        background-color: darkmagenta
        
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

window.customElements.define('mascotas-medianas', MascotasMedianas)
