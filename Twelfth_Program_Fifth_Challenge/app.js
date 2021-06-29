const app = Vue.createApp({
    data()
    {
        return{
            tasks: [],
            buttonIsPressed: true,
            task: '',
            

        };
    },
    computed:
    {
        buttonText()
        {
            if(this.buttonIsPressed === true)
            {
                return 'Hide Section';
            }
            else{
                return 'Show Section'
            }
        }
        
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