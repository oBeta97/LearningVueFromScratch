const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: '',
            partialInput: ''
        };
    },
    computed:{
        test(){
            return this.asdf(this.output1);
        }
    },
    methods: {
        asdf(input){
            return 'ciao ' + input;
        },
        showAlert() {
            alert('Button was pressed!');
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