const app = Vue.createApp({
    data() {
        return {
            paragraphs: [],
            enteredText: '',
            myGitHub: 'https://github.com/oBeta97/'
        };
    },
    methods: {
        addText() {
            this.paragraphs.push(this.enteredText);
            this.enteredText = '';
        }
    }
});


app.mount('#app');