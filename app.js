Vue.createApp({
    data() {
        return {
            paragraphs: [],
            enteredText: ''
        };
    },
    methods: {
        addText() {
            this.paragraphs.push(this.enteredText);
            this.enteredText = '';
        }
    }
}).mount('#app');