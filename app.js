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
    beforeCreate() {
        console.log("beforeCreate()");
    },
    created() {
        console.log("created()");
    },
    beforeMount() {
        console.log("beforeMount()");
    },
    mounted() {
        console.log("mounted()");
    },
    beforeUpdate() {
        console.log("beforeUpdate()");
    },
    update() {
        console.log("update()");
    },
    updated() {
        console.log("updated()");
    }
});

app.mount("#assignment");