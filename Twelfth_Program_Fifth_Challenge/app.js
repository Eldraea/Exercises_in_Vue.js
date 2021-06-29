const app = Vue.createApp({
    data()
    {
        return{
            tasks: [],
            buttonIsPressed: true,
            task: '',

        };
    },

    methods: {

        addTask(task)
        {
            this.tasks.push(task);
        },

        buttonPressed()
        {
            this.buttonIsPressed = !this.buttonIsPressed;
        }

    }
});

app.mount('#assignment');