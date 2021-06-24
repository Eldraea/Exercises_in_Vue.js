const app = Vue.createApp(
    {
        data()
        {
            return {
                name: 'Eldr@e@',
                age: 21,
                imageLink: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg'  
            };
        },
        methods: {

            agePlusFive()
            {
                return this.age + 5;
            }  

        }
    }
);

app.mount('#assignment');