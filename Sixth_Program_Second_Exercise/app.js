const app= Vue.createApp(
    {
        data(){
            return {

                output:''
            };
        },

        methods: {
            buttonPressed()
            {
                alert('The Button has been pressed!!');
            },

            showOutput(event)
            {
                    this.output= event.target.value;
            }
        }
    }
);

app.mount('#assignment');