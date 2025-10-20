const app = Vue.createApp({
  data() {
    return {
      name: 'Paolo',
      age: 'My age is: 28',
      agePlusFive: 'My Age in 5 year: 33',
      defaultText: 'This is a funny cat gif!',
      randomCat: 'https://cataas.com/cat/gif?width=300'
    }
  },
    methods: {
        randomNumber() {
            return 'My favourite number between 0 and 1 is: ' + Math.random().toFixed(1);
        }
    }
});

app.mount('#assignment');