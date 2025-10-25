const app = Vue.createApp({
    data() {
        return {
            goals: [],
            inputGoalValue: ''
        };
    },
    methods: {
        addGoal() {
            if (this.inputGoalValue.trim() !== '') {
                this.goals.push(this.inputGoalValue);
                this.inputGoalValue = '';
            }
        }
    }
});

app.mount('#user-goals');
