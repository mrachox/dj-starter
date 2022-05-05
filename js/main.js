import {
  createApp
} from 'vue'

createApp({

  data() {
    return {
      dataPull: {}
    }
  },
  // components: {
  //   TodoItem,
  // },
  created() {
    console.log("I've been created")
    // Simple GET request using fetch
    fetch("../data/reference.json")
      .then(response => response.json())
      .then(data => (this.dataPull = data));

  },
}).mount('#app')
