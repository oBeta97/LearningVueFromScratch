const app = Vue.createApp({
    data() {
        return {
            // for style me paragraphs
            enterdClass: '',
            enterdClass2: '',
            isPVisible: true,
            pBgColor: '',

            // for jhonny style
            jStyle: '',
            jView: true
        };
    },
    computed: {
        // style method
        pStyles() {
            return {
                visibility: this.isPVisible ? 'visible' : 'hidden',
                backgroundColor: this.pBgColor
            };
        },
        // class method
        jClasses() {
            return {
                user1: this.isUser1,
                user2: this.isUser2,
                hidden: this.isHidden,
                visible: this.isVisible
            };
        },
        isUser1() {
            return this.jStyle === 'user1';
        },
        isUser2() {
            return this.jStyle === 'user2';
        },
        isVisible() {
            return this.jView;
        },
        isHidden() {
            return !this.jView;
        }
    },
    methods: {
        // toggle method with buttons click
        toggleHiddenP() {
            this.isPVisible = !this.isPVisible;
        },
        toggleJView() {
            this.jView = !this.jView;
        }
    }
});

app.mount('#assignment');