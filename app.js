const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTaskText: "",
            showList: true,
        };
    },
    computed: {
        hideOrShow() {
            return this.showList ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTaskText);
            this.newTaskText = "";
        },
        toggleList() {
            this.showList = !this.showList;
        }
    },
});

app.mount("#assignment");