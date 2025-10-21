const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            isTimerRunning: false,
        };
    },
    watch: {
        result() {
            if (!this.isTimerRunning) {
                console.log('Starting timer...');
                this.timerId = setTimeout(() => {
                    if(this.counter !== 37){
                        this.counter = 0;
                        alert('The time is over, you lost!');
                        return;
                    }

                    alert('Congratulations, you won!');
                }, 5000);
                this.startTimer();
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
        addToResult(num) {
            this.counter += num;
        },
        startTimer() {
            if(this.isTimerRunning){
                console.log('Timer already running!');
                return;
            }
            
            console.log('Starting timer from method...');
            this.isTimerRunning = true;
        }
    }
});

app.mount('#assignment');