<template>

  <section>
    <div class="jumbotron">
      <h2>Conversor a dolares</h2>
      <br>
      <p>Ingrese Monto $<input name="cantidad" v-model="cantidad" type="number"></p>
      <p>Valor del dolar en $<input name="valorDado" v-model="valorDado" value="valorDado" type="number"> - Actualizacion <input type="checkbox" v-model="checked" @input="chequeado()"></p> <p v-if="checked"> {{dateTime.fecha}}</p> 
      <p> Valor convertido USD {{ resultado }} </p>
      <br>
      <p>Respuestas: 1:c 2:b 3:c 4:a 5:b</p>
    </div>      
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-api-rest-ful',
    props: [],
    mounted () {
      //this.getDolarBlue()
      this.setDateTime()
    },
    data () {
      const date = new Date()
      return {
        checked: false,
        mostrar: false,
        cantidad: 1,
        valorDado: 1,
        url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
        dolares : [],
        dolarBlue: 1,
        dateTime: {
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds(),
        },
      }
    },
    methods: {
      /* ---------------------------------- */
      /*           API REST : GET           */
      /* ---------------------------------- */
      async getDolarBlue() {
        try {
          
          let { data : dolares } = await this.axios(this.url)
         
          this.dolares = dolares
          this.dolarBlue =  parseFloat(dolares[1].casa.venta)
          this.valorDado = this.dolarBlue
          this.mostrar = true
        }
        catch(error) {
          console.error('Error en getDolarBlue', error.message)
        }
      },
      chequeado(){
        if(this.checked == true){
            this.getDolarBlue()
            this.setDateTime()
        }
      },
      setDateTime() {
        const date = new Date();
        this.dateTime = {
          fecha: date.toLocaleString(),
          
        };
      },
                  
    },
    computed: {
        resultado(){
          return this.cantidad / this.valorDado
        }
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: navy;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
  
  </style>
