const app = Vue.createApp(
    {
        data()
        {
            return{

                inputUser: '',
                paragraphisVisible: true,
                inputBackgroundColor: '',
               

            };
        },
        computed:
        {
           paraClasses()
           {
               return{
                   user1: this.inputUser === 'user1',
                   user2: this.inputUser === 'user2',
                   visible: this.paragraphisVisible === true,
                   hidden: this.paragraphisVisible === false,

               }
           } 
        },

        methods: {
            paragraphIsVisible()
            {
                this.paragraphisVisible = !this.paragraphisVisible;
            }
        }
    }

);

app.mount('#assignment');