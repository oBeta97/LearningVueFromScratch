const app = Vue.createApp({
    data() {
        return {
            countNumber: 0,
            defaultText: 'This is a funny cat gif!',
            enteredText: 'empty',
            randomCat: 'https://cataas.com/cat/gif?width=300'
        }
    },
    methods: {
        plus() {
            this.countNumber++;
        },
        plusVar(num){
            this.countNumber += num;
        },
        plusRandom() {
            this.countNumber += Math.floor(Math.random() * 10) + 1;
        },
        less() {
            this.countNumber--;
        },
        lessVar(num){
            this.countNumber -= num;
        },
        lessRandom() {
            this.countNumber -= Math.floor(Math.random() * 10) + 1;
        },
        reset() {
            this.countNumber = 0;
        },
        updateText(event, baseText) {
            if(event.target.value.length !== 0)
                this.enteredText = baseText + event.target.value;
            else
                this.enteredText = 'empty';
        }
    }
});

app.mount('#assignment');