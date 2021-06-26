const app =Vue.createApp({
    data(){
        return{
            counter: 0,
            result: ' ',
        };
    },

    watch: {
        counter(value)
        {
            if(value > 37)
              this.result= 'Too much!';
            else if(value < 37)
                this.result ='Not there yet';
            else 
                this.result = '';
        },
        result(newValue, oldValue) {
            setTimeout(() => {
              this.counter = 0;
            }, 5000);
          },
      
    },

    computed: {

        displayResult()
        {
            return this.counter + ' ' + this.result;
        }

    },

    methods:
    {
        add(num) {
            this.counter = this.counter + num;
          },
    },
});

app.mount('#assignment');