const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            isTimerRunning: false,
            timerId: 0
        };
    },
    watch: {
        isTimerRunning(value) {
            if (value && this.timerId === 0) {
                console.log('Starting timer...');
                this.timerId = setTimeout(() => {
                    if(this.counter !== 37){
                        this.counter = 0;
                        alert('The time is over, you lost!');
                        return;
                    }

                    alert('Congratulations, you won!');
                }, 5000);
            } 
        }
    },
    computed: {
        result() {

            switch(true){
                case (this.counter === 37):
                    return 'You did it!!';
                case this.counter === 0:
                    return 'Start playing!';
                case (this.counter < 37):
                    return 'Not there yet';
                case (this.counter > 37):
                    return 'Too much!';
            }

            return this.counter;
        }
    },
    methods: {
        add5() {
            this.counter += 5;
            this.startTimer();
        },
        add1() {
            this.counter += 1;
            this.startTimer();
        },
        startTimer() {
            if(this.isTimerRunning){
                return;
            }
            
            console.log('Starting timer from method...');
            this.isTimerRunning = true;
        }
    }
});

app.mount('#assignment');