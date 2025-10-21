const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: '',
            partialInput: ''
        };
    },
    methods: {
        showAlert() {
            alert('Button was pressed!');
        },
        updateOutput1(event) {
            this.output1 = event.target.value;
        },
        updateOutput2(event) {
            this.output2 = this.partialInput;
        },
        updatePartialInput(event) {
            this.partialInput = event.target.value;
        }
    }
});

app.mount('#assignment');