const { createApp } = Vue
  
  createApp({
    data() {
      return {
        url:'https://yohana-olivera.github.io/json/reviews.json',
        comentarios: [],
      }
    },
    methods: {
      fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.comentarios=data
                console.log(this.comentarios)
            })
      }
    },
    created(){

      this.fetchData(this.url)
    }
  }).mount('#app')