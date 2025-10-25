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
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        }
    }
});

app.mount('#user-goals');
